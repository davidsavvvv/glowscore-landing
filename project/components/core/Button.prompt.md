Primary action button — gold is the default in-app CTA, white is reserved for the marketing landing.

```jsx
<Button variant="gold" size="lg" iconRight={<ArrowRight size={16} />}>Découvrir mon score</Button>
<Button variant="white">Mon compte</Button>
<Button variant="outline" size="sm">Retour</Button>
<Button variant="ghost">Paramètres</Button>
<Button variant="gold" block>Débloquer pour 4,99 €</Button>
```

Variants: `gold` (primary, hover → #FFC200), `white` (marketing, hover → white/90), `secondary` (#1a1a1a fill), `outline` (hairline border), `ghost` (text-only, lifts opacity on hover). Sizes `sm | md | lg`. All filled variants use **black** text. Use `block` for form submits and paywall CTAs.
