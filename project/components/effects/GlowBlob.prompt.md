Signature ambient gold glow. Put it behind hero/CTA content; parent needs `position: relative; overflow: hidden`.

```jsx
<section style={{ position: "relative", overflow: "hidden" }}>
  <GlowBlob style={{ top: 0, left: "50%", transform: "translateX(-50%)" }} />
  <h1 style={{ position: "relative" }}>Deviens un 10/10</h1>
</section>
```

Keep opacity 0.15–0.2 and blur 120–150px — one warm light source on a dark stage.
