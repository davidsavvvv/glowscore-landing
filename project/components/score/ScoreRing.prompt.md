The signature circular score gauge — gold arc, serif number, gold halo.

```jsx
<ScoreRing score={8.5} />
<ScoreRing score={9.2} size={128} stroke={8} />
```

The arc fills proportional to `score / max` and animates over 1s. Center number is Playfair gold; the caption defaults to `/10`.
