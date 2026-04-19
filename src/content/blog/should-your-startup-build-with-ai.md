---
title: "Should Your Startup Actually Build With AI? A Founder's Reality Check"
description: "Not every startup needs AI. Not every problem is an LLM problem. The honest decision framework we walk founders through before adding AI to the roadmap."
publishedAt: 2026-04-02
author: "Kratecx"
image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
imageAlt: "Founder team at a whiteboard — planning a startup roadmap"
tags: ["ai", "strategy", "startups", "product"]
category: "AI"
---

Ninety percent of **AI-branded startups** we see in pre-seed decks
don't actually need AI. They need a clear wedge, a working CRUD
app, and a paying customer. The AI is a slide, not a product.

This is the short reality-check conversation we have with founders
at [Kratecx](/services) before we agree to bolt AI into an MVP.
If you're a technical or non-technical founder weighing whether AI
belongs in your roadmap, this is the framework we use.

It's deliberately skeptical. The goal isn't to talk you out of
using AI — we build AI features all the time. It's to make sure
the decision is honest.

## Why this matters right now

2024–2026 has been the most aggressive period of **AI-shaped
investment** in startup history. That's produced a lot of real
value — and a lot of bad product decisions that get funded anyway.

- Investors will ask every deck why there isn't an AI story.
- Customers will ask every demo what the AI does.
- Engineers will ask every Jira ticket why a regex became an LLM
  call.

Those pressures combine to push AI into roadmaps where it
**increases cost, increases complexity, and decreases reliability**
— without increasing the value the product delivers.

The four questions below separate AI features that earn their
keep from AI features that are just pattern-matching to the zeitgeist.

## Question 1 — is your problem shaped like an LLM problem?

LLMs are excellent at a specific, narrow category of tasks:

- Turning unstructured text into structured data.
- Summarising, rewriting, translating, classifying.
- Conversational interfaces over a finite corpus of content.
- Natural-language interfaces to structured systems.
- Content generation where *good enough* is acceptable.

They are **bad** at:

- **Numerical precision.** Calculations, financial accounting,
  scientific computation. An LLM will confidently produce
  wrong numbers.
- **Real-time transactional workflows.** Anything where *every*
  answer must be right, every time. Payments, bookings, legal
  enforcement.
- **Deterministic logic.** If a rule-based system can do it in
  200 lines of code and a day of testing, it's a rule-based
  system. LLMs are slower, more expensive, and less reliable for
  this class of problem.
- **Tasks where "close enough" isn't close enough.** Medical
  diagnosis, legal advice, anything regulated.

If your feature doesn't clearly fit the first list, it probably
doesn't need an LLM.

**Self-test:** describe what the AI feature does in one sentence.
If the sentence contains "calculate", "verify", "enforce", or
"guarantee", be very suspicious.

## Question 2 — what does the non-AI version look like?

Before we wire in any LLM, we always ask: *"If we removed AI
entirely, is the product still a business?"*

- If the answer is **no**, the AI *is* the product. That's a
  different startup. You need a **data moat**, a proprietary eval
  pipeline, probably fine-tuned models, and a team that
  understands the AI layer deeply. Most founders asking this
  question aren't ready for that and shouldn't pretend otherwise.
- If the answer is **yes**, the AI is a **feature**, and you can
  ship a small version of it in a week. Start there. Prove it
  adds value. *Then* invest in making it better.

We've watched three separate pre-seed companies spend six months
"building the AI engine" for a product that turned out to have no
users who cared. The engineering time would have been better spent
shipping a v1 that manually produced the same result, testing
whether anyone actually wanted it.

## Question 3 — can you afford the unit economics?

A quick gut-check we run with every founder:

1. Estimate average **tokens per active user per day**.
2. Multiply by your model's **cost per 1k tokens** (input + output).
3. Multiply by **30** for monthly cost per user.
4. Compare to your **ARPU** (or projected ARPU).

If AI cost is **>25% of ARPU**, you have a margin problem before
you scale. Options:

- Move to a cheaper model tier (usually possible without quality
  loss — see [our OpenAI integration guide](/blog/integrating-openai-into-saas-product)).
- Cap heavy users.
- Reprice usage-based.
- Rethink whether the feature needs AI at all.

Most founders drastically underestimate token consumption once
the product is in real users' hands. A feature that "uses ~500
tokens per action" during development quietly becomes 3,000
tokens once users start pasting their entire emails into it.

**Always plan for 3–5× the token budget you estimated.**

## Question 4 — do you have the data to keep the feature good?

A shipped AI feature is not done. It degrades over time if you
don't feed it. Every AI feature needs:

- An **eval set** that lives in the repo and runs in CI on every
  prompt or model change.
- **Production logs** capturing prompt + completion + user feedback
  (thumbs up/down, or implicit signals like retries).
- A **monthly review** — what did users get frustrated by? What
  questions did the AI fail on? What does the competition do
  better?
- A **content / prompt update cadence** — at minimum quarterly,
  preferably monthly.

No founder under-budgets for the first month. Everyone
under-budgets for the year. We've seen teams ship an AI feature
with enthusiasm, forget it exists for 12 months, and then wonder
why users don't engage with it anymore.

## When AI is clearly the right call

We've shipped AI-first features for clients where the pattern is
consistent. AI genuinely earned its place when:

- A human was doing an expensive, repetitive, **text-heavy task**
  (support triage, legal summarisation, onboarding form mapping,
  compliance review).
- The input was **unstructured** and the output was **structured**.
- The 80/20 rule applied — the AI only needed to be right **80% of
  the time** to create enormous value, because the human only had
  to review the 20% instead of processing 100%.

Those are the real AI wins. Not "add a chatbot to the homepage",
not "generate marketing copy from scratch", not "AI everything".

## When AI is almost certainly the wrong call

Patterns we routinely advise founders to avoid:

### 1. AI where a database query would do

If the answer to a user's question is *literally in your database*,
don't pay OpenAI to tell them. Use a traditional UI or a
templated query.

### 2. AI for regulatory compliance

Regulatory outputs must be right every time. If a regulator asks
*"why did this happen?"*, "the AI said so" is not an acceptable
answer. Use rule-based systems, audited and testable.

### 3. AI for fraud detection (as the only layer)

AI is useful as one signal among many. Making it the sole
decision-maker is a reliability nightmare and an adversarial
target.

### 4. AI to sound modern in a deck

Investors see through it. Customers can tell when the AI feature
is decorative. The worst outcome is raising a round on an AI
narrative you can't deliver on.

## The TL;DR framework

Ship AI when:

- The task is **language-shaped**.
- A **non-AI version** of the product already works.
- **Unit economics** survive the API cost.
- You can maintain a **simple eval loop**.

Don't ship AI when:

- The feature needs **numerical precision**.
- AI **is** the product but you lack **data or eval moat**.
- **Cost per user > 25% of ARPU**.
- You don't have the team to maintain it for 12+ months.

## Founder reality check: frequently asked questions

**But investors want to see AI in the deck. Should I fake it?**
No. Genuine founder-investor fit matters more than dressing up the
product. Lead with the actual problem and the actual customer.
If AI fits, weave it in. If it doesn't, the right investors won't
care.

**We're already 6 months into building an AI-first product and
realised the non-AI version would be better. What now?**
Ship the non-AI version immediately. Validate whether users want
the underlying functionality at all. If they do, you can layer AI
back in where it genuinely helps. Don't anchor on sunk cost.

**Is it still cheap to ship AI in 2026?**
Yes, for proof-of-concept. A production-grade AI feature — with
evals, streaming, cost controls, and proper UX — is still
**weeks, not hours**. Budget accordingly.

**What about agents?**
Agent frameworks (LangGraph, CrewAI, OpenAI's Swarm) are powerful
but fragile. For production, we use agents cautiously: scoped
agents with strict tool whitelists and timeout limits. Avoid
"autonomous agents on the open internet" for any feature users
depend on.

**Does this advice still hold in 12 months as models improve?**
The cost side will keep improving. Models will get cheaper, faster,
more capable. The *fit* question (sections 1 and 2) doesn't depend
on model progress — it depends on your product. Even a free perfect
LLM wouldn't turn a regex problem into an AI problem.

## Next steps

If you're weighing whether AI belongs in your product roadmap
and want a 30-minute no-pitch call, [that's on us](/contact). We'll
ask harder questions than your investors will, and tell you what
we'd actually build.

Continue reading on the Kratecx blog:

- [Integrating OpenAI into a SaaS product without blowing the budget](/blog/integrating-openai-into-saas-product) — once you've decided AI belongs, this is the how.
- [AI chatbots on business websites](/blog/ai-chatbots-for-business-websites) — a lower-stakes AI integration that's a good starting point for most businesses.
