---
title: "The Shopify Speed Checklist We Ship Every Store With"
description: "A field-tested Shopify speed checklist covering theme, apps, images, fonts, Liquid and Core Web Vitals — the exact steps we run before every launch."
publishedAt: 2026-04-14
author: "Kratecx"
image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80"
imageAlt: "E-commerce checkout page on a laptop screen"
tags: ["shopify", "performance", "e-commerce", "core-web-vitals"]
category: "E-Commerce"
---

Shopify stores are fast by default — until you install seven apps,
bolt on a "conversion popup", add two pixel trackers, and ship a hero
slider with 18 slides. By the time the site hits production, the
**Largest Contentful Paint** (LCP) has slipped past 4 seconds,
bounce rate creeps up, and conversion quietly drops 10–15%.

This is the pre-launch **Shopify speed checklist** we run against
every store we build at [Kratecx](/services). It's boring on purpose.
Every item on it has moved Core Web Vitals for a real merchant at
least once.

If you're launching a new Shopify store — or if your existing store
feels sluggish on mobile — work through the sections below in order.
We'll cover the **theme**, **apps**, **images**, **fonts**,
**Liquid**, and the **last 10%** of optimisation work that actually
separates a good store from a great one.

## Why Shopify store speed matters in 2026

Before the checklist, a 90-second reality check on why this work
pays for itself.

- Google uses **Core Web Vitals** (LCP, INP, CLS) as a confirmed
  ranking signal. Slow stores rank worse, get less organic traffic,
  and pay more per click on paid ads.
- A 2024 Shopify study found that improving LCP from 4.5s to 2.5s
  on a product-detail page lifted conversion by roughly **8–12%**
  across mid-size stores.
- On mobile, **53% of users abandon** a page that takes more than
  3 seconds to load. On a Shopify store, that's every cart
  abandoned before it was ever filled.

Speed isn't vanity. It's revenue. Now the checklist.

## 1. Theme and Liquid: start from clean ground

Most speed disasters are theme-shaped. A 2018-era theme ships jQuery,
an ancient slider plugin, three untreecheckable JS bundles, and a
custom font loader that blocks render. No amount of later optimisation
will fix that foundation.

### Start from Dawn (or a Dawn-based theme)

In 2026, there's no good reason to ship a Shopify theme that isn't
either **Dawn** or a fork of it.

- Dawn is **Online Store 2.0**, sections-everywhere, zero jQuery.
- It's maintained by Shopify — it keeps up with platform improvements.
- Every feature we've ever needed is either in Dawn or doable with a
  small custom section.

If a client arrives with an older theme (Debut, Brooklyn, Minimal,
Supply, or a paid Envato theme), we audit whether it's worth
migrating. Usually, yes.

### Audit your Liquid

Pull up your theme's `layout/theme.liquid` and `snippets/head.liquid`
and look for:

- **Duplicate preconnects** to the same domain.
- Legacy **pixel tags** (Facebook pixel for campaigns that ended two
  years ago, old Google Analytics UA tags, retargeting pixels from
  uninstalled apps).
- **Synchronous `<script>` tags** in `<head>` that don't need to run
  before paint — add `defer` or `type="module"`.
- Unused CSS from sections you removed from templates but never
  deleted from the theme code.

Every removed line is another millisecond shaved off First Contentful
Paint.

### Kill unused sections

Open every template file. Any section referenced in the theme editor
but not actually used on any live template can be safely deleted —
its CSS and JS are still shipping to every visitor.

## 2. Images: the single biggest LCP lever

On 90% of Shopify stores we audit, the **hero image** or the **first
product image** is the Largest Contentful Paint element. Fix it and
everything downstream gets faster.

### Use WebP everywhere

Shopify's `image_tag` filter generates WebP automatically:

```liquid
{{ product.featured_image | image_url: width: 1600 | image_tag: loading: 'lazy' }}
```

Check your theme code — if you see raw `<img src="{{ image | img_url }}">`,
replace it with `image_tag`. WebP images are typically **25–35% smaller**
than the equivalent JPEG at the same visual quality.

### Set explicit `width` and `height` on every image

This one rule single-handedly eliminates most **Cumulative Layout
Shift** (CLS) issues. Without dimensions, the browser doesn't know
how tall an image will be, so every image that loads causes the
layout to jump.

```liquid
<img
  src="{{ product.featured_image | image_url: width: 800 }}"
  width="800"
  height="800"
  alt="{{ product.title | escape }}"
  loading="lazy"
  decoding="async"
>
```

### Preload only the hero

Add `<link rel="preload">` **only** for the single image that's the
LCP candidate. That's usually the first hero image or the first
product image above the fold. Preloading more than one is net
negative — you steal bandwidth from other resources.

### Never use a PNG logo larger than 40 KB

If yours is, convert it to **SVG**. Logos are vector by nature —
there's no excuse to serve them as 200 KB PNGs.

## 3. Apps: the silent speed killer

Every Shopify app adds at least one, usually two, `<script>` tags to
your storefront. An average store with 15 apps is shipping ~600 KB of
third-party JavaScript before the user has seen anything.

### The 30-day app audit

Open Shopify admin → Apps. For every app, ask three questions:

1. **Does this app visibly earn its keep on the storefront?** If it
   doesn't render anything the customer sees, check if you still need
   it at all.
2. **Could the same functionality live in the theme?** Countdown
   timers, upsell blocks, and simple popups are usually 20 lines of
   custom Liquid — no app required.
3. **When was the last time we logged in?** Unused apps are still
   charging you monthly *and* slowing the site.

We've seen stores reduce third-party script payload by **60%** just
by uninstalling apps the owner forgot were installed.

### Defer what you can keep

For apps that have to stay, check if the script supports async
loading. Many modern Shopify apps ship `async`/`defer` by default,
but legacy ones inject synchronous scripts into `<head>`. You can
often override this with a `<script defer>` wrapper or by moving the
snippet to just before `</body>`.

## 4. Fonts: the invisible layout-shift tax

Fonts are the sleeper cause of **CLS** on Shopify stores. The
browser renders text with a fallback font, then swaps when the
custom font arrives — and every character suddenly has a different
width.

### Host fonts on Shopify

Shopify's CDN serves static assets from edge locations via Cloudflare.
Font files loaded from `cdn.shopify.com` are near-instant for most of
the world.

Avoid loading from Google Fonts or another third-party in 2026 —
every extra domain is an extra DNS lookup, TLS handshake, and
potential point of failure.

### Use `font-display: swap`

```css
@font-face {
  font-family: 'Your Brand Font';
  src: url('/fonts/your-font.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
  font-style: normal;
}
```

`font-display: swap` tells the browser: *"show the fallback font
immediately, swap when the custom font arrives."* Without it, the
browser blocks render for up to 3 seconds waiting for the font file.

### Subset to Latin unless you actively sell in CJK markets

Most commercial fonts ship a full Unicode character set. That's
anywhere from **70 KB to 300 KB per weight** you load. If your
customers only read Latin-script languages, subset the font to
Latin + Latin Extended. You'll shave 50–80% off the file.

## 5. The last 10%: what separates good from great

If you've done everything above, your Core Web Vitals should already
be green. These are the small wins that take a 90 Lighthouse score
to a 98.

### Lighthouse the *collection* page, not just the homepage

The homepage is always the cleanest URL — it's been over-optimised
by every founder and agency before you. The **collection page** is
where most traffic lands from paid ads and Google Shopping, and
it's usually slower.

Run `npx lighthouse https://your-store.com/collections/all --view`.
Every second you shave here is a direct conversion lift.

### Watch the filmstrip

Lighthouse's filmstrip view shows what's rendering frame-by-frame.
Anything still moving after **2.5 seconds** is your next LCP
regression. Usually a lazy-loaded image, a delayed font swap, or
an app popup.

### Re-run after every app install

We've seen stores get a perfect Lighthouse score on Monday, install
two "urgently needed" apps on Tuesday, and ship a 4-second LCP on
Wednesday. Make "check Lighthouse" a permanent step in your
app-install workflow.

## Shopify speed: frequently asked questions

**How fast should a Shopify store be?**
Target **LCP under 2.5 seconds** on mobile 4G, **CLS under 0.1**, and
**INP under 200 ms**. These are Google's Core Web Vitals thresholds.
Anything better is bonus.

**Does Shopify Plus load faster than standard Shopify?**
Not meaningfully. Shopify Plus gives you higher throughput and more
checkout customisation, but the front-end performance is the same.
Your theme, apps, and images decide your speed — not your plan.

**Will minifying CSS and JavaScript speed up my Shopify store?**
Shopify's Online Store 2.0 themes already serve minified assets via
CDN with aggressive caching. Manual minification has almost no
impact in 2026. Spend that time auditing apps and images instead.

**Do "speed booster" apps actually work?**
In our experience, no. Most just preload a few assets while adding
their own script tag. The gains are marginal, the technical debt
grows, and you now have one more monthly subscription. Fix the
underlying issues instead.

## Next steps

If you'd rather have a senior developer audit your store and hand
you a prioritised fix list, [we do Shopify speed audits](/services).
We'll screen-record the slow parts, tell you what to remove, and
ship the changes if you want us to.

Prefer to DIY? Start with section 2 (**Images**). It's the highest-
impact section for most stores, and it takes about two hours.

Further reading on the Kratecx blog:

- [How we structure a SaaS marketing site in 2026](/blog/saas-marketing-site-structure) — the page-map we use for product sites that scale.
- [WordPress vs Astro — which one should your business actually pick?](/blog/wordpress-vs-astro-which-to-pick) — when Shopify isn't the right answer at all.
