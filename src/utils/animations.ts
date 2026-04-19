/**
 * Kratecx — GSAP animation utilities.
 * Dark-minimal, Linear/Vercel-style motion. Subtle, never bouncy.
 *
 * Usage inside an Astro <script>:
 *   import { animateOnScroll, staggerReveal, countUp } from '@/utils/animations';
 *   animateOnScroll('[data-animate="heading"]');
 *   staggerReveal('.card', '.card-grid');
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Respect reduced motion preferences. */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Shared from-state used across the site. Subtle, professional. */
const DEFAULT_FROM: gsap.TweenVars = {
  opacity: 0,
  y: 16,
  duration: 0.7,
  ease: 'power2.out',
};

export interface AnimateOnScrollOptions {
  /** Override from-vars (initial state). */
  from?: gsap.TweenVars;
  /** Trigger position, defaults to 'top 88%'. */
  start?: string;
  /** Animate once then unsubscribe — default true. */
  once?: boolean;
  /** Optional delay before the tween fires (seconds). */
  delay?: number;
}

/**
 * Animate a single element (or every element matching the selector) as it
 * enters the viewport. Uses transform + opacity only — never layout props.
 */
export function animateOnScroll(
  selector: string | Element | NodeListOf<Element>,
  options: AnimateOnScrollOptions = {},
): void {
  if (prefersReducedMotion()) {
    gsap.set(selector, { clearProps: 'all', opacity: 1 });
    return;
  }

  const { from = DEFAULT_FROM, start = 'top 88%', once = true, delay } = options;
  const tweenVars = { ...from };
  if (delay !== undefined) tweenVars.delay = delay;

  gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
    gsap.set(el, { willChange: 'transform, opacity' });
    gsap.from(el, {
      ...tweenVars,
      scrollTrigger: {
        trigger: el,
        start,
        once,
      },
      onComplete: () => el.style.removeProperty('will-change'),
    });
  });
}

export interface StaggerRevealOptions {
  /** Per-child from-vars. */
  from?: gsap.TweenVars;
  /** Stagger between siblings (s). Default 0.09. */
  stagger?: number;
  /** Scroll trigger start position. Default 'top 80%'. */
  start?: string;
}

/**
 * Reveal the direct children of `parentSelector` with a subtle stagger.
 * If only `selector` is provided, it's used as the trigger *and* child list.
 */
export function staggerReveal(
  selector: string,
  parentSelector?: string,
  options: StaggerRevealOptions = {},
): void {
  if (prefersReducedMotion()) {
    gsap.set(selector, { clearProps: 'all', opacity: 1 });
    return;
  }

  const {
    from = { opacity: 0, y: 16, duration: 0.65, ease: 'power2.out' },
    stagger = 0.09,
    start = 'top 80%',
  } = options;

  const triggers = parentSelector
    ? gsap.utils.toArray<HTMLElement>(parentSelector)
    : gsap.utils.toArray<HTMLElement>(selector).map((el) => el.parentElement!).filter(Boolean);

  triggers.forEach((parent) => {
    const children = parent.querySelectorAll<HTMLElement>(selector);
    if (!children.length) return;

    gsap.set(children, { willChange: 'transform, opacity' });
    gsap.from(children, {
      ...from,
      stagger,
      scrollTrigger: {
        trigger: parent,
        start,
        once: true,
      },
      onComplete: () => children.forEach((c) => c.style.removeProperty('will-change')),
    });
  });
}

/**
 * Count-up effect for numeric stats. The element must contain only the
 * final integer (no commas / suffixes — render those separately).
 */
export function countUp(
  selector: string,
  options: { duration?: number; start?: string } = {},
): void {
  if (prefersReducedMotion()) return;

  const { duration = 1.6, start = 'top 85%' } = options;

  gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
    const target = parseFloat(el.dataset.to ?? el.textContent ?? '0');
    if (Number.isNaN(target)) return;

    const obj = { v: 0 };
    el.textContent = '0';

    gsap.to(obj, {
      v: target,
      duration,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start, once: true },
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toLocaleString();
      },
    });
  });
}

/**
 * Horizontal rule / divider — grows from left. Perfect for section separators.
 */
export function lineGrow(
  selector: string,
  options: { start?: string } = {},
): void {
  if (prefersReducedMotion()) {
    gsap.set(selector, { scaleX: 1 });
    return;
  }

  const { start = 'top 90%' } = options;
  gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
    gsap.set(el, { transformOrigin: 'left center', scaleX: 0 });
    gsap.to(el, {
      scaleX: 1,
      duration: 0.9,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start, once: true },
    });
  });
}

/**
 * Heading reveal with a subtle blur fade. Crisper feel than a plain fade-up.
 */
export function revealHeading(
  selector: string,
  options: { start?: string } = {},
): void {
  if (prefersReducedMotion()) {
    gsap.set(selector, { clearProps: 'all', opacity: 1 });
    return;
  }

  const { start = 'top 88%' } = options;
  gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
    gsap.set(el, { willChange: 'transform, opacity, filter' });
    gsap.from(el, {
      opacity: 0,
      y: 18,
      filter: 'blur(4px)',
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start, once: true },
      onComplete: () => el.style.removeProperty('will-change'),
    });
  });
}

/**
 * Initialise every data-animate pattern on the current page. Called by
 * Layout.astro on every `astro:page-load`. Safe to call multiple times.
 */
export function initPageAnimations(): void {
  // Kill any previous ScrollTriggers (Astro re-runs scripts on navigation).
  ScrollTrigger.getAll().forEach((t) => t.kill());

  revealHeading('[data-animate="heading"]');
  animateOnScroll('[data-animate="paragraph"]', { delay: 0.1 });
  animateOnScroll('[data-animate="cta"]', {
    from: { opacity: 0, y: 14, scale: 0.96, duration: 0.6, ease: 'power2.out' },
  });
  lineGrow('[data-animate="divider"]');
  countUp('[data-animate="count-up"]');
  staggerReveal('[data-animate="card"]', '[data-animate="card-grid"]');

  // Tell ScrollTrigger to recalculate after the DOM settles.
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

/** Re-export the gsap singleton so components don't double-import. */
export { gsap, ScrollTrigger };
