---
title: "Integrating OpenAI Into a SaaS Product Without Blowing the Budget"
description: "A practical architecture guide for adding OpenAI or Anthropic to a SaaS product — streaming, cost controls, evaluation, and the mistakes founders keep making."
publishedAt: 2026-04-11
author: "Kratecx"
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80"
imageAlt: "Network of connected nodes — cloud infrastructure and API architecture"
tags: ["ai", "saas", "openai", "architecture", "anthropic"]
category: "AI"
---

Shipping AI inside a SaaS product is no longer optional for most
categories. It's also never been easier to do badly. We've built
AI features into more than a dozen SaaS products at
[Kratecx](/services), and the mistakes are remarkably consistent.

This post is the **architecture playbook** we've converged on for
integrating **OpenAI** or **Anthropic** into SaaS — covering the
back-end, cost controls, streaming, evaluation, and the specific
patterns that keep bills predictable and users happy.

If you're a CTO or technical founder about to wire an LLM into your
product, start here. Everything below is the distilled version of
"what we wish the team had known in week 1".

## 1. Never call the LLM directly from the browser

The single most expensive mistake we've cleaned up on audits is a
front-end that calls OpenAI directly, with the API key visible in
network requests.

The consequences:

- **Your key is public the moment you ship.** Anyone can copy it,
  run a script, and bill you into oblivion.
- **You have zero per-user rate limiting.** A malicious user (or
  just a bug in your UI) can fire 1,000 requests in a loop.
- **You have no audit trail.** No way to see what prompts ran,
  no way to trace a bad output back to its cause.

**The rule**: every LLM call goes through your own back-end.
Always. Even for "just a prototype". Even if it's slower to set up.
Even if the founder is impatient.

We use small Node, Hono, or Go services as the LLM gateway. They
authenticate the user, enforce rate limits, log the request, call
OpenAI/Anthropic with the key held server-side, and stream the
response back to the browser.

## 2. Put a three-layer cost guardrail in place before launch

Every AI feature we ship has three guardrails, layered. Together,
they are the difference between "$100/month" and "I got a $12k
surprise bill" on a bad week.

### Layer 1 — per-user daily caps

Every user has a daily token budget stored in your database. Before
every LLM call, check the remaining budget. If exceeded, return a
friendly "you've reached your daily limit, upgrade for more".

Typical starting budgets:

- **Free tier**: 10,000 tokens/day (≈ 20 short conversations).
- **Paid tier**: 500,000 tokens/day.
- **Enterprise**: uncapped but monitored.

### Layer 2 — per-plan monthly caps

Stop users from burning their whole annual budget in week one.
Soft-warn at 80% of the monthly cap, hard-limit at 100%, optionally
offer a top-up button.

### Layer 3 — org-wide circuit breaker

A hard kill-switch: *"if our account's OpenAI spend in the last 24
hours exceeds $X, disable the AI feature entirely and alert the
team."*

This saved one of our clients roughly $4,000 on a Sunday when a
rogue integration test ran unbounded. The breaker kicked in at
$800 and slacked the on-call engineer. Without it, the client
would have woken up to a $12k bill on Monday morning.

## 3. Choose the right model tier

The model landscape in 2026 looks roughly like this:

| Model | Best for | Rough cost |
|---|---|---|
| **GPT-4o-mini** / **Claude Haiku 3.5** | Classification, extraction, Q&A, chat, routing | $ |
| **GPT-4o** / **Claude Sonnet 4** | Reasoning, writing, summarisation, agents | $$ |
| **GPT-4-Turbo** / **Claude Opus 4** | Hard reasoning, long context, complex agents | $$$ |

**Default to the cheap tier.** Most production SaaS features route
90% of traffic through GPT-4o-mini or Claude Haiku and only escalate
to the expensive tier for specific, well-scoped workloads.

The tell-tale sign you're over-modelling: **you can't tell the
difference** between two model tiers in a blind test on your data.
If you can't, you're burning money.

## 4. Stream responses from day one

If your AI feature takes longer than 2 seconds, **stream the
output**. It is the biggest single UX improvement you can make for
free.

Users perceive streaming responses as **roughly 3× faster** than
non-streaming equivalents, even when the total time is identical.
They get to start reading immediately. The "AI is thinking..."
state is gone.

Both OpenAI and Anthropic support streaming. On the front end, use
`EventSource` for Server-Sent Events or standard `fetch` with a
`ReadableStream`. It's a few dozen lines of code. Ship it.

## 5. Log everything, but redact first

Every AI feature we ship logs:

- The full user prompt.
- The full model response.
- The model used.
- Tokens used (prompt + completion).
- Cost per request (computed at log time).
- Latency.
- A unique request ID.

This log is gold. It's how you debug hallucinations, improve
prompts, and price your product properly.

But before you store the log, **redact**:

- Email addresses.
- Phone numbers.
- Credit-card-like number patterns.
- Anything that looks like an API key, bearer token, or password.

A simple regex pass is enough for 90% of cases. Run it
server-side on the way to the log store. Never ship raw user
prompts into an analytics system without redaction.

## 6. Evaluate before you ship — and after every prompt change

The mistake we see most often:

> *"We'll iterate on the prompt in production."*

You can't iterate if you don't know whether you got better or
worse. Before launching any AI feature, do this:

1. Write **30–50 representative inputs** covering the expected use
   cases, edge cases, and adversarial inputs.
2. Write the **expected behaviour** for each (not the exact output
   — the *shape* of a correct answer, or a yes/no score criterion).
3. Run your current prompt against all 30–50, record the outputs,
   score each manually (or with an LLM-as-judge for scale).
4. **Save the scorecard**. Keep it in the repo.
5. Every time you change the prompt or switch models: re-run, and
   compare against the saved scorecard.

This is the difference between "vibes-driven prompt engineering"
and actual engineering. Do it. You'll thank yourself in month three
when a subtle prompt change breaks something you can't reproduce.

## 7. Design your pricing around token cost

Before pricing, calculate:

- **Average tokens per active user per month.**
- **Model cost per 1k tokens** (input + output separately).
- **Gross API cost per user per month.**

If that gross cost is **> 25% of your ARPU**, you have a margin
problem before you even scale.

Options:

- Move the feature to a cheaper tier.
- Cap heavy users (see section 2).
- Price usage-based (per-token or per-request credits).
- Raise the subscription price.

Don't ship until the math works. Otherwise you're building a
business that loses money on every happy customer.

## 8. The prompt is not source code — treat it better

Prompts are fragile. A single-word change can flip behaviour. Yet
most teams treat them as strings buried deep in a service file.

What we do instead:

- Keep prompts in their **own versioned files**
  (`prompts/extract-invoice.v7.md`).
- Reference them by version in code:
  `const prompt = loadPrompt('extract-invoice', 'v7');`.
- Run the **eval suite** (section 6) on every prompt version.
- Roll back is then a one-line code change, not a re-prompt session.

## 9. Plan for when the LLM is down

OpenAI has had multi-hour outages. Anthropic too. If your feature
becomes critical to your product, you need a fallback plan.

Options, in rising order of effort:

- **Graceful degradation UI** — "AI is unavailable right now, try
  again in a minute." Always have this.
- **Retry with a different provider** — OpenAI fails, fall back to
  Anthropic, or vice-versa.
- **Pre-computed fallback** — for predictable use cases, pre-run
  common queries offline and serve cached answers when live
  inference fails.

At minimum, ship the graceful UI. The other two depend on how
critical the feature is.

## Common mistakes we keep fixing on audits

Patterns we see repeatedly when we're brought in to audit an
existing AI integration:

1. **Direct OpenAI calls from the browser** — section 1.
2. **No user-level rate limiting** — entire account rate-limited by
   one bad user.
3. **Over-modelling** — GPT-4o for simple classification tasks,
   burning 10× the cost for no perceptible quality gain.
4. **No streaming** — 6-second "loading" spinner for responses that
   would feel fine if streamed.
5. **Prompts buried in 2,000-line service files** — nobody can edit
   them confidently.
6. **No logging** — when a customer complains about a weird output,
   nobody can reproduce or debug it.
7. **No evals** — every prompt change is a gamble.
8. **No circuit breaker** — one bad day becomes a four-digit
   surprise bill.

## OpenAI / Anthropic for SaaS: frequently asked questions

**OpenAI or Anthropic — which should I choose?**
Both are excellent. OpenAI has broader third-party tooling and
function calling matured earliest. Anthropic tends to produce more
restrained, less sycophantic outputs — better for enterprise
contexts. In practice, most production SaaS apps now support both
and route dynamically based on task.

**Should we fine-tune, or stick with prompting?**
Default to prompting + RAG. Fine-tuning is worth the complexity
only when: (a) you have 10,000+ high-quality examples, (b) latency
or cost of the base model is a bottleneck, or (c) you need a very
specific style the prompt can't enforce.

**Is self-hosting an open-source model cheaper?**
Only at high volume. Running Llama 3.1 70B or Mistral Large
yourself becomes cheaper than OpenAI/Anthropic API calls at
roughly **1B+ tokens/month**. Below that, the API is almost
always cheaper when you account for GPU costs, ops time, and
downtime.

**How do we handle prompt injection attacks?**
Sanitise user input, keep user content separate from system
instructions, and consider using a safety classifier on both
input and output. For high-stakes applications, wrap the LLM in
**guardrails** (e.g., Guardrails AI, Rebuff) that detect common
injection patterns.

**What about on-device AI for privacy-sensitive products?**
Viable for some use cases in 2026, especially with Apple
Intelligence on iOS and local Llama via Ollama on macOS/Windows.
Quality is still below the cloud SOTA. We recommend cloud as
default, with an on-device fallback for clearly privacy-sensitive
operations.

## Next steps

If you're building AI into a SaaS product and want a second set of
eyes on your architecture before it ships — or if you want us to
build the AI layer for you — [tell us about your product](/contact).

More AI engineering reading:

- [Should your startup actually build with AI?](/blog/should-your-startup-build-with-ai) — the framework for deciding if AI even belongs in your roadmap.
- [AI chatbots on business websites](/blog/ai-chatbots-for-business-websites) — a simpler, higher-leverage AI integration for top-of-funnel.
