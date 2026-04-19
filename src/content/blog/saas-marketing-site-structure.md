---
title: "How We Structure a SaaS Marketing Site in 2026"
description: "The page map, content model and technical stack we use for every SaaS marketing website — designed to rank, convert, and scale from seed to Series B without a rebuild."
publishedAt: 2026-04-09
author: "Kratecx"
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
imageAlt: "Business analytics dashboard showing performance metrics"
tags: ["saas", "web-development", "strategy", "content-marketing"]
category: "SaaS"
---

Every SaaS founder we work with wants the same thing: **a marketing
site that explains the product clearly, ranks in Google, and doesn't
need a rebuild in 12 months**.

We've shipped more than thirty SaaS marketing sites at
[Kratecx](/services) over the last few years, and the structure has
converged. What follows is the exact page map, content model, and
technical stack we recommend to every founder — the one we'd use if
we were shipping our own product tomorrow.

It's opinionated. It's boring. It also works.

## Why most SaaS marketing sites fail

Before the playbook, a quick reality check on what goes wrong.

- Founders build a **single-page Webflow site** at launch and never
  revisit it. By month 12 it has zero ranking pages, no case studies,
  and no changelog.
- The homepage tries to **explain everything at once** — five
  features, three personas, two pricing tiers — and ends up
  explaining nothing.
- The pricing page is **hidden behind "Contact us for pricing"**,
  killing ~40% of qualified demo requests before they ever fill the
  form.
- There is **no content engine**. The team says "we'll start a blog
  next quarter" for six consecutive quarters.

Every one of those mistakes is a structural problem, not a design
problem. This post is the structure.

## The core seven pages

Every SaaS marketing site we build in 2026 has exactly these seven
pages (plus `/blog`, `/changelog`, and `/docs` if you have a
product that needs them). Not more, not less.

### 1. Home (`/`)

One job: **explain the product in 7 seconds**.

Structure we use:

1. **Hero** — product name, one-line value prop, CTA (Start free / Book demo).
2. **Social proof strip** — customer logos or a single customer
   quote.
3. **Three product pillars** — not a feature list. Three outcomes
   the product delivers.
4. **Deeper demo** — a short video, an interactive walkthrough, or a
   product screenshot with callouts.
5. **Secondary social proof** — testimonials, G2 score, case-study
   snippet.
6. **CTA block** — the same CTA as the hero, in case the user scrolled
   past it.

Keep the homepage under **1,000 words** total. Everything else lives
on dedicated pages.

### 2. Product pages (one per job-to-be-done)

This is the single biggest structural decision. Most SaaS sites have
a single `/features` page. We never ship that.

Instead, we ship **one product page per core job the user hires
the software to do**. If your tool sends invoices, tracks expenses,
and runs payroll, that's **three product pages** — not one.

Why?

- Three landing pages = three times the keyword surface area.
- Each page is a dedicated ad destination, so ad spend is efficient.
- The copy can go deep on one problem without diluting.
- Users who land on the page that matches their exact need convert
  at roughly **2× the rate** of those who land on a "features" page.

### 3. Pricing (`/pricing`)

**Show the price.** Every time we've tested "Contact us" vs. a
public pricing page, public wins — both in volume of sign-ups and
in quality (self-service users upgrade; contact-us users often
ghost).

A good SaaS pricing page includes:

- **The tiers** with prominent monthly and annual toggles.
- A **feature comparison table** — even if all tiers have the same
  features. The table signals clarity.
- A **pricing FAQ** — "Can I change plans?", "Is there a free trial?",
  "Do you offer discounts for annual?".
- A **contact link at the bottom** for enterprise. Not at the top.

### 4. Customers (`/customers`)

Even two case studies are better than zero. Every SaaS founder
*thinks* their case-study page doesn't matter until they're
competing on an RFP and the prospect asks "do you have references
we can look at?".

For each case study: the customer's industry, team size, what they
used to do before, what they use your product for now, and at least
**one concrete metric** (time saved, revenue added, error rate
reduced).

### 5. Changelog (`/changelog`)

This is the cheapest blog content you'll ever ship. Every release
note is:

- A **public commitment** to shipping (helpful for enterprise trust).
- An indexed page for **long-tail keywords** like
  "[product] + [feature]".
- A reason for existing users to come back and remember the product
  exists.

Over 12 months, 40 releases become 40 indexed pages. Over 36 months,
120. That's your second-biggest SEO asset after the blog — and it
costs nothing incremental, because you're shipping releases anyway.

### 6. Company / About (`/about`)

Short. Founders, location, values (if you actually live them), a
paragraph on why the company exists. We keep this under 600 words.

If you're hiring, a **Careers** link here is worth 10× a separate
/careers URL in terms of actually getting applicants.

### 7. Blog (`/blog`)

The SEO engine. See the next section.

## The blog is the SEO engine — here's how to structure it

A SaaS blog only works if it's structured around **topic clusters**
and run with discipline. The structure we deploy:

- **Pillar posts** — 2,500-word definitive guides on the one topic
  your product is the obvious answer to. These target
  high-competition, high-intent keywords.
- **Cluster posts** — 1,000–1,500-word articles on subtopics. Each
  links back to the pillar.
- **Comparison posts** — "[You] vs [Competitor]" and
  "[Alternative] to [Popular Tool]". These convert ridiculously
  well for middle-of-funnel visitors.
- **Integration / use-case posts** — one per integration you offer
  and one per common use case. Each is a dedicated landing page
  with its own keywords.

A good SaaS blog should aim to ship **2 posts per week** for the
first 12 months. After that, the compounding effect of internal
linking and backlinks usually lets you slow to 1/week.

## Technical stack: what we actually build this on

The stack we default to in 2026:

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Content-first, fast by default, islands architecture |
| CMS | **Sanity**, **Contentful**, or **Astro Content Collections** | Depends on team size |
| Hosting | **Vercel** or **Netlify** | Edge caching, preview URLs, painless CI |
| Analytics | **Plausible** or **GA4** | Plausible for privacy + simplicity; GA4 for advertisers |
| Forms | **Typeform** embed, **Tally**, or native fetch to API route | Keep it simple early |

### Why Astro, not Next.js, for marketing sites

We love Next.js for product apps. For marketing sites, Astro wins:

- **Ships zero JS by default** — every page starts at a perfect
  Lighthouse score before you do anything.
- **Islands architecture** — you hydrate only the small interactive
  bits (pricing calculator, FAQ accordion), not the whole page.
- **Content Collections** give type-safe Markdown/MDX without a
  separate CMS for small teams.

If you want the full framework comparison, read
[WordPress vs Astro — which one should your business actually
pick?](/blog/wordpress-vs-astro-which-to-pick).

## Three common mistakes we keep fixing

### 1. Treating the site like a launch artifact

The marketing site is not something you ship once. It's the top of
your funnel. It needs an owner, a monthly review, and a content
roadmap.

### 2. Designing for the pitch deck, not for Google

Beautiful hero illustrations and animated gradients don't rank.
**Text ranks**. If your pages are 80% illustration and 20% words,
you have a portfolio site, not a marketing site.

### 3. Building it on a no-code tool you'll outgrow

Webflow and Framer are excellent for V1. They start to hurt when
you need: custom programmatic SEO, integrations with your product,
a real CMS schema, or the ability to let five marketers publish
simultaneously without overwriting each other.

Plan the migration window before you need it.

## SaaS marketing site: frequently asked questions

**How long does it take to build a proper SaaS marketing site?**
For the page map above, with real content written, plan on **6–10
weeks** with a small team. Faster is possible; shorter usually means
you're shipping placeholder content.

**Should we launch with just a landing page first?**
Yes — but with a clear deadline to replace it. A single-page site is
fine for the first 90 days while you validate the product and
gather customer quotes. After that, start adding the core seven.

**How much should a SaaS marketing site cost?**
Ranges we see in 2026: **$8k–$20k** for a solo-founder to seed-stage
site built on Astro with Content Collections. **$20k–$60k** for a
Series A site with a headless CMS, custom animations, and a marketer
who'll keep using it.

**Is a blog still worth it in an AI-summarised web?**
Yes — and arguably more than ever. AI search tools cite sources, so
deep, canonical content on your domain still wins attribution.
The cost of one-off content has gone up; the value of evergreen
pillar content has gone up further.

## Next steps

If you're shipping a SaaS marketing site and want a second set of
eyes on the page map before you build, [we're happy to review
yours](/contact) — no pitch, just structural feedback.

Keep reading on the Kratecx blog:

- [The Shopify speed checklist we ship every store with](/blog/shopify-store-speed-checklist) — many of the performance principles apply equally to SaaS sites.
- [Integrating OpenAI into a SaaS product without blowing the budget](/blog/integrating-openai-into-saas-product) — if AI is part of your product story.
