/* @ds-bundle: {"format":3,"namespace":"GlowScoreDesignSystem_b335d6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"GlowBlob","sourcePath":"components/effects/GlowBlob.jsx"},{"name":"GlassNav","sourcePath":"components/navigation/GlassNav.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"ScoreChip","sourcePath":"components/score/ScoreChip.jsx"},{"name":"ScoreRing","sourcePath":"components/score/ScoreRing.jsx"},{"name":"SubScore","sourcePath":"components/score/SubScore.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"69a3ce966316","components/core/Button.jsx":"dcfbadfa66e6","components/core/Card.jsx":"a37d0de4e023","components/core/Input.jsx":"36927f1433c7","components/effects/GlowBlob.jsx":"53725e27914b","components/navigation/GlassNav.jsx":"4c56ecd06c3f","components/navigation/NavItem.jsx":"5898f3692872","components/score/ScoreChip.jsx":"d51eae5662cb","components/score/ScoreRing.jsx":"ce09314980c2","components/score/SubScore.jsx":"2a0c960f4df5","ui_kits/app/screens.jsx":"1c32cc5a653f","ui_kits/shared/icon.js":"55569d2afd40"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GlowScoreDesignSystem_b335d6 = window.GlowScoreDesignSystem_b335d6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlowScore pill badge. Fully-rounded, small. Default = gold (e.g. score
 * chips / "Populaire"); subtle = faint white chip ("Gratuit").
 */
function Badge({
  children,
  variant = "gold",
  style = {},
  ...props
}) {
  const variants = {
    gold: {
      background: "var(--gs-gold)",
      color: "#000",
      border: "1px solid transparent"
    },
    subtle: {
      background: "var(--gs-white-05)",
      color: "var(--gs-white-30)",
      border: "1px solid var(--gs-white-08)"
    },
    outline: {
      background: "transparent",
      color: "var(--gs-white-50)",
      border: "1px solid var(--gs-white-10)"
    },
    soft: {
      background: "rgba(255,215,0,0.10)",
      color: "var(--gs-gold)",
      border: "1px solid rgba(255,215,0,0.20)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: 22,
      padding: "0 10px",
      fontSize: 12,
      fontWeight: 700,
      fontFamily: "var(--gs-font-sans)",
      borderRadius: "var(--gs-radius-full)",
      whiteSpace: "nowrap",
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    height: 32,
    padding: "0 14px",
    fontSize: 13,
    radius: "var(--gs-radius-lg)",
    gap: 6
  },
  md: {
    height: 44,
    padding: "0 20px",
    fontSize: 14,
    radius: "var(--gs-radius-xl)",
    gap: 8
  },
  lg: {
    height: 56,
    padding: "0 32px",
    fontSize: 16,
    radius: "var(--gs-radius-2xl)",
    gap: 8
  }
};
function base(variant, hover) {
  switch (variant) {
    case "gold":
      return {
        background: hover ? "var(--gs-gold-hover)" : "var(--gs-gold)",
        color: "#000",
        border: "1px solid transparent"
      };
    case "white":
      return {
        background: hover ? "rgba(255,255,255,0.9)" : "#fff",
        color: "#000",
        border: "1px solid transparent"
      };
    case "secondary":
      return {
        background: hover ? "#222" : "var(--gs-surface-2)",
        color: "#fff",
        border: "1px solid transparent"
      };
    case "outline":
      return {
        background: hover ? "var(--gs-surface-2)" : "transparent",
        color: "#fff",
        border: "1px solid var(--gs-border-strong)"
      };
    case "ghost":
      return {
        background: hover ? "var(--gs-white-05)" : "transparent",
        color: hover ? "#fff" : "var(--gs-white-50)",
        border: "1px solid transparent"
      };
    default:
      return {};
  }
}

/**
 * GlowScore primary button. Gold is the workhorse in-app CTA; white is the
 * marketing-landing CTA. Black foreground on filled variants.
 */
function Button({
  children,
  variant = "gold",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...props
}) {
  const [hover, setHover] = useState(false);
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: disabled,
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      fontWeight: 700,
      fontFamily: "var(--gs-font-sans)",
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--gs-dur-fast) var(--gs-ease), border-color var(--gs-dur-fast) var(--gs-ease)",
      whiteSpace: "nowrap",
      ...base(variant, hover && !disabled),
      ...style
    }
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlowScore surface card. #111 fill + hairline ring + generous radius.
 * `glass` makes it a translucent blurred panel (used over glow blobs);
 * `glow` adds the soft gold ambient shadow; `accent` adds a gold border.
 */
function Card({
  children,
  glass = false,
  glow = false,
  accent = false,
  padding = 20,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: glass ? "rgba(0,0,0,0.40)" : "var(--gs-surface)",
      backdropFilter: glass ? "var(--gs-glass-blur)" : undefined,
      WebkitBackdropFilter: glass ? "var(--gs-glass-blur)" : undefined,
      border: accent ? "1px solid rgba(255,215,0,0.30)" : "1px solid var(--gs-white-08)",
      borderRadius: "var(--gs-radius-2xl)",
      boxShadow: glow ? "var(--gs-glow-card)" : undefined,
      padding,
      color: "var(--gs-fg)",
      boxSizing: "border-box",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;

/**
 * GlowScore text input. Dark #1a1a1a fill, #333 border that turns gold on
 * focus. Matches the auth forms.
 */
function Input({
  style = {},
  type = "text",
  ...props
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    onFocus: e => {
      setFocus(true);
      props.onFocus && props.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      props.onBlur && props.onBlur(e);
    },
    style: {
      width: "100%",
      background: "var(--gs-surface-2)",
      border: `1px solid ${focus ? "var(--gs-gold)" : "var(--gs-border-strong)"}`,
      borderRadius: "var(--gs-radius-xl)",
      padding: "11px 16px",
      fontSize: 14,
      fontFamily: "var(--gs-font-sans)",
      color: "#fff",
      outline: "none",
      boxSizing: "border-box",
      transition: "border-color var(--gs-dur-fast) var(--gs-ease)",
      ...style
    }
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/effects/GlowBlob.jsx
try { (() => {
/**
 * Ambient gold glow blob — GlowScore's signature lighting. Absolutely
 * positioned, heavily blurred radial gradient. Drop one behind a hero or CTA.
 */
function GlowBlob({
  size = 700,
  opacity = 0.18,
  blur = 120,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      width: size,
      height: size * 0.57,
      borderRadius: "var(--gs-radius-full)",
      background: "var(--gs-blob-gold)",
      filter: `blur(${blur}px)`,
      opacity,
      pointerEvents: "none",
      ...style
    }
  });
}
Object.assign(__ds_scope, { GlowBlob });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/effects/GlowBlob.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlassNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Floating glass pill nav used on the marketing landing — sticky, centered,
 * 2xl radius, translucent black + heavy blur, hairline border.
 */
function GlassNav({
  children,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      width: "100%",
      maxWidth: 880,
      padding: "12px 20px",
      borderRadius: "var(--gs-radius-2xl)",
      border: "1px solid var(--gs-white-10)",
      background: "var(--gs-glass-bg)",
      backdropFilter: "var(--gs-glass-blur)",
      WebkitBackdropFilter: "var(--gs-glass-blur)",
      boxSizing: "border-box",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { GlassNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlassNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;

/**
 * Sidebar navigation item. Active = faint white fill + white text; idle =
 * white/40 text that brightens and picks up a faint fill on hover. Pass a
 * Lucide icon node via `icon`.
 */
function NavItem({
  icon = null,
  children,
  active = false,
  href = "#",
  style = {},
  ...props
}) {
  const [hover, setHover] = useState(false);
  const lit = active || hover;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 12px",
      borderRadius: "var(--gs-radius-xl)",
      fontSize: 14,
      fontWeight: active ? 500 : 400,
      textDecoration: "none",
      color: lit ? "#fff" : "var(--gs-white-40)",
      background: active ? "var(--gs-white-08)" : hover ? "var(--gs-white-05)" : "transparent",
      transition: "color var(--gs-dur-fast) var(--gs-ease), background var(--gs-dur-fast) var(--gs-ease)",
      ...style
    }
  }, props), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16
    }
  }, icon), children);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/score/ScoreChip.jsx
try { (() => {
/**
 * Compact label + score readout, colored by tier (low / mid / high). Used in
 * the landing-page "Score facial" radar grid.
 */
function ScoreChip({
  label,
  score,
  tone = "mid"
}) {
  const colors = {
    low: "var(--gs-score-low)",
    mid: "var(--gs-score-mid)",
    high: "var(--gs-score-high)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--gs-font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--gs-white-40)",
      marginBottom: 2
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: colors[tone] || colors.mid
    }
  }, score, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gs-white-20)",
      fontSize: 12,
      fontWeight: 400
    }
  }, "/10")));
}
Object.assign(__ds_scope, { ScoreChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/score/ScoreChip.jsx", error: String((e && e.message) || e) }); }

// components/score/ScoreRing.jsx
try { (() => {
/**
 * GlowScore circular score ring — the signature element. Gold progress arc on
 * a dark track, big serif number in the center, soft gold halo.
 */
function ScoreRing({
  score = 8.5,
  max = 10,
  size = 176,
  stroke = 10,
  label = "/10"
}) {
  const radius = (size - stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.max(0, Math.min(1, score / max));
  const offset = circumference - pct * circumference;
  const c = size / 2;
  const num = size * 0.55;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "drop-shadow(var(--gs-glow-ring))"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      position: "absolute",
      inset: 0,
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: c,
    cy: c,
    r: radius,
    stroke: "var(--gs-border)",
    strokeWidth: stroke,
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: c,
    cy: c,
    r: radius,
    stroke: "var(--gs-gold)",
    strokeWidth: stroke,
    fill: "none",
    strokeDasharray: circumference,
    strokeDashoffset: offset,
    strokeLinecap: "round",
    style: {
      transition: "stroke-dashoffset 1s var(--gs-ease)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      zIndex: 1,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--gs-font-serif)",
      fontWeight: 700,
      fontSize: num,
      color: "var(--gs-gold)"
    }
  }, score), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gs-muted)",
      fontSize: num * 0.32,
      marginLeft: 2
    }
  }, label)));
}
Object.assign(__ds_scope, { ScoreRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/score/ScoreRing.jsx", error: String((e && e.message) || e) }); }

// components/score/SubScore.jsx
try { (() => {
/**
 * Labelled sub-score row with a gold progress bar. Used in the detailed-scores
 * panel (Structure faciale, Peau, Style & soins, Harmonie).
 */
function SubScore({
  label,
  value = 0,
  max = 10
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--gs-font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      fontSize: 14,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gs-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontWeight: 500
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gs-white-30)"
    }
  }, "/", max))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--gs-border)",
      borderRadius: "var(--gs-radius-full)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${pct}%`,
      background: "var(--gs-gold)",
      borderRadius: "var(--gs-radius-full)",
      transition: "width var(--gs-dur-slow) var(--gs-ease)"
    }
  })));
}
Object.assign(__ds_scope, { SubScore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/score/SubScore.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens.jsx
try { (() => {
// GlowScore app screens. Loaded as a Babel module; exports screens to window.
const {
  useState,
  useEffect,
  useRef
} = React;
function Wordmark({
  size = 18
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontWeight: 700,
      fontSize: size
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gs-gold)"
    }
  }, "Glow"), "Score");
}

/* ───────────────────────── LOGIN ───────────────────────── */
function Login({
  go
}) {
  const {
    Button,
    Input
  } = window.GlowScoreDesignSystem_b335d6;
  const Icon = window.GSIcon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--gs-bg)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: "var(--gs-gold)"
    }
  }, "GlowScore"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-muted)",
      marginTop: 8,
      fontSize: 14
    }
  }, "Connectez-vous \xE0 votre compte")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gs-surface)",
      border: "1px solid var(--gs-border)",
      borderRadius: "var(--gs-radius-xl)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    block: true,
    onClick: () => go("dashboard"),
    style: {
      height: 44
    },
    iconLeft: /*#__PURE__*/React.createElement(GoogleG, null)
  }, "Continuer avec Google"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--gs-border)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gs-muted-2)",
      fontSize: 12
    }
  }, "ou"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--gs-border)"
    }
  })), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email",
    type: "email",
    defaultValue: "alex@exemple.fr"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Mot de passe",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    block: true,
    onClick: () => go("dashboard")
  }, "Se connecter")), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      color: "var(--gs-muted)",
      fontSize: 14,
      marginTop: 16
    }
  }, "Pas de compte ? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--gs-gold)"
    },
    onClick: e => {
      e.preventDefault();
      go("dashboard");
    }
  }, "S'inscrire"))));
}
function GoogleG() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
  }));
}

/* ───────────────────────── SHELL ───────────────────────── */
function Shell({
  active,
  go,
  children
}) {
  const {
    NavItem
  } = window.GlowScoreDesignSystem_b335d6;
  const Icon = window.GSIcon;
  const items = [{
    key: "dashboard",
    icon: "layout-dashboard",
    label: "Mes analyses"
  }, {
    key: "scan",
    icon: "camera",
    label: "Nouvelle analyse"
  }, {
    key: "settings",
    icon: "settings",
    label: "Paramètres"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      background: "#000",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      borderRight: "1px solid var(--gs-white-05)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36,
      cursor: "pointer"
    },
    onClick: () => go("dashboard")
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      flex: 1
    }
  }, items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.key,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 16
    }),
    active: active === it.key,
    onClick: e => {
      e.preventDefault();
      go(it.key === "settings" ? "dashboard" : it.key);
    }
  }, it.label))), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "log-out",
      size: 16
    }),
    onClick: e => {
      e.preventDefault();
      go("login");
    }
  }, "D\xE9connexion")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, children));
}

/* ───────────────────────── DASHBOARD ───────────────────────── */
function Dashboard({
  go,
  analyses
}) {
  const {
    Button,
    Badge
  } = window.GlowScoreDesignSystem_b335d6;
  const Icon = window.GSIcon;
  return /*#__PURE__*/React.createElement(Shell, {
    active: "dashboard",
    go: go
  }, /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "40px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0
    }
  }, "Mes analyses"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-white-40)",
      fontSize: 14,
      marginTop: 4
    }
  }, "alex@exemple.fr")), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "md",
    onClick: () => go("scan"),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16,
      color: "#000"
    })
  }, "Nouvelle analyse")), analyses.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "96px 0",
      border: "1px dashed var(--gs-white-08)",
      borderRadius: "var(--gs-radius-2xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--gs-radius-2xl)",
      background: "var(--gs-white-05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "camera",
    size: 28,
    color: "var(--gs-white-20)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-white-40)",
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Aucune analyse pour le moment"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-white-20)",
      fontSize: 14,
      marginBottom: 24
    }
  }, "Lance ta premi\xE8re analyse pour d\xE9couvrir ton score"), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => go("scan"),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "camera",
      size: 16,
      color: "#000"
    })
  }, "Analyser ma premi\xE8re photo")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, analyses.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => go("result"),
    style: {
      border: "1px solid var(--gs-white-08)",
      borderRadius: "var(--gs-radius-2xl)",
      padding: 16,
      background: "var(--gs-white-02)",
      cursor: "pointer",
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--gs-radius-xl)",
      background: "var(--gs-white-05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 20,
    color: "var(--gs-white-20)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gs-white-30)",
      fontSize: 12
    }
  }, a.date), /*#__PURE__*/React.createElement(Badge, {
    variant: "subtle"
  }, "Gratuit")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      color: "var(--gs-gold)"
    }
  }, a.score), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gs-white-30)",
      fontSize: 14
    }
  }, "/10")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-white-40)",
      fontSize: 12,
      marginTop: 4
    }
  }, "D\xE9bloquez pour voir le rapport complet")))))));
}

/* ───────────────────────── SCANNER ───────────────────────── */
const PHASES = [{
  key: "front",
  instr: "Regardez droit devant la caméra",
  sub: "Restez immobile",
  pct: 20
}, {
  key: "turn-left",
  instr: "Tournez la tête à gauche ←",
  sub: "Tournez lentement et maintenez",
  pct: 40,
  arrow: "←"
}, {
  key: "turn-right",
  instr: "Tournez la tête à droite →",
  sub: "Tournez lentement et maintenez",
  pct: 70,
  arrow: "→"
}, {
  key: "uploading",
  instr: "Analyse IA en cours",
  sub: "",
  pct: 100
}];
function Scanner({
  go,
  finish
}) {
  const {
    Button
  } = window.GlowScoreDesignSystem_b335d6;
  const Icon = window.GSIcon;
  const [active, setActive] = useState(false);
  const [pi, setPi] = useState(0);
  const [scanY, setScanY] = useState(0);
  const phase = PHASES[pi];
  useEffect(() => {
    if (!active) return;
    if (phase.key === "uploading") {
      const t = setTimeout(() => finish(), 1800);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPi(p => p + 1), 2000);
    return () => clearTimeout(t);
  }, [active, pi]);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setScanY(y => (y + 1.5) % 100), 16);
    return () => clearInterval(id);
  }, [active]);
  const steps = [["Face", pi >= 1], ["Gauche", pi >= 2], ["Droite", pi >= 3]];
  return /*#__PURE__*/React.createElement(Shell, {
    active: "scan",
    go: go
  }, /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 480,
      margin: "0 auto",
      padding: "48px 24px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("dashboard");
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--gs-white-40)",
      fontSize: 14,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16,
    color: "var(--gs-white-40)"
  }), "Retour"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: "0 0 8px"
    }
  }, "Nouvelle analyse"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-white-40)",
      fontSize: 14,
      marginBottom: 32
    }
  }, "T\xE9l\xE9charge une photo de ton visage pour obtenir ton score sur 10."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--gs-white-10)",
      borderRadius: "var(--gs-radius-2xl)",
      background: "var(--gs-white-02)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20
    }
  }, active && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 320,
      height: 4,
      background: "var(--gs-white-10)",
      borderRadius: 9999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: "var(--gs-gold)",
      borderRadius: 9999,
      width: phase.pct + "%",
      transition: "width .7s var(--gs-ease)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 320,
      aspectRatio: "3/4",
      borderRadius: "var(--gs-radius-2xl)",
      overflow: "hidden",
      border: "1px solid var(--gs-white-10)",
      background: "var(--gs-surface-blue)"
    }
  }, !active ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: 9999,
      border: "2px dashed var(--gs-white-20)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-round",
    size: 40,
    color: "var(--gs-white-30)",
    strokeWidth: 1.2
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-white-30)",
      fontSize: 14
    }
  }, "Centrez votre visage ici")) : /*#__PURE__*/React.createElement(React.Fragment, null, ["top:12px;left:12px;border-top:2px solid;border-left:2px solid", "top:12px;right:12px;border-top:2px solid;border-right:2px solid", "bottom:12px;left:12px;border-bottom:2px solid;border-left:2px solid", "bottom:12px;right:12px;border-bottom:2px solid;border-right:2px solid"].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      width: 24,
      height: 24,
      borderColor: "var(--gs-gold)",
      borderRadius: 4,
      ...styleFromString(c)
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 224,
      borderRadius: 9999,
      border: "2px solid rgba(255,215,0,0.3)",
      boxShadow: "0 0 20px rgba(255,215,0,0.1)"
    }
  })), phase.key === "front" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: scanY + "%",
      height: 2,
      background: "linear-gradient(90deg,transparent,#FFD700,transparent)",
      boxShadow: "0 0 8px rgba(255,215,0,0.8)"
    }
  }), phase.arrow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 60,
      color: "var(--gs-gold)",
      fontWeight: 700,
      textShadow: "0 0 30px rgba(255,215,0,0.9)"
    },
    className: "gs-pulse"
  }, phase.arrow), phase.key === "uploading" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gs-spin",
    style: {
      width: 40,
      height: 40,
      border: "2px solid var(--gs-gold)",
      borderTopColor: "transparent",
      borderRadius: 9999
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-gold)",
      fontSize: 14,
      fontWeight: 500
    }
  }, "Analyse en cours\u2026")))), active && phase.key !== "uploading" && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-gold)",
      fontWeight: 600,
      fontSize: 16,
      margin: 0
    }
  }, phase.instr), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-white-30)",
      fontSize: 12,
      marginTop: 4
    }
  }, phase.sub)), active && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, steps.map(([label, done]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: done ? "var(--gs-gold)" : "var(--gs-white-20)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: done ? "var(--gs-gold)" : "var(--gs-white-30)"
    }
  }, label)))), !active && /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    block: true,
    onClick: () => {
      setActive(true);
      setPi(0);
    }
  }, "D\xE9marrer l'analyse")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 12,
      marginTop: 24,
      textAlign: "center"
    }
  }, [["Score /10", "Précis & objectif"], ["30 secondes", "Résultat immédiat"], ["5 conseils", "Personnalisés pour toi"]].map(([l, d]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      border: "1px solid var(--gs-white-05)",
      borderRadius: "var(--gs-radius-xl)",
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gs-white-30)",
      fontSize: 12
    }
  }, d))))));
}
function styleFromString(s) {
  const o = {};
  s.split(";").forEach(d => {
    const [k, v] = d.split(":");
    if (!k) return;
    const key = k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    o[key] = v.trim();
  });
  return o;
}

/* ───────────────────────── RESULT ───────────────────────── */
function Result({
  go,
  paid,
  unlock
}) {
  const {
    Button,
    Card,
    ScoreRing,
    SubScore
  } = window.GlowScoreDesignSystem_b335d6;
  const Icon = window.GSIcon;
  const [plan, setPlan] = useState("one_shot");
  const forts = ["Mâchoire bien définie et structure faciale équilibrée", "Regard expressif avec une bonne symétrie oculaire", "Teint homogène et éclat de peau naturel"];
  const subs = [["Structure faciale", 8.0], ["Peau", 7.4], ["Style & soins", 7.6], ["Harmonie", 7.7]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--gs-bg)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid var(--gs-border)",
      position: "sticky",
      top: 0,
      background: "var(--gs-bg)",
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("dashboard");
    },
    style: {
      color: "var(--gs-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20,
    color: "var(--gs-muted)"
  })), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "var(--gs-gold)"
    }
  }, "GlowScore"))), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 540,
      margin: "0 auto",
      padding: "32px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0
    }
  }, "Votre analyse"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-muted)",
      fontSize: 14,
      marginTop: 4
    }
  }, "13 juin 2026")), /*#__PURE__*/React.createElement(ScoreRing, {
    score: 8.5
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-muted)",
      fontSize: 14,
      textAlign: "center",
      maxWidth: 380,
      margin: 0
    }
  }, "Un visage harmonieux avec une structure \xE9quilibr\xE9e. Quelques optimisations cibl\xE9es peuvent \xE9lever ton score."), /*#__PURE__*/React.createElement(Card, {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 600,
      margin: "0 0 12px"
    }
  }, "Vos points forts"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, forts.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      width: 20,
      height: 20,
      borderRadius: 9999,
      background: "rgba(255,215,0,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    color: "var(--gs-gold)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#ccc",
      fontSize: 14
    }
  }, p))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 600,
      margin: "0 0 16px"
    }
  }, "Scores d\xE9taill\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, subs.map(([l, v]) => /*#__PURE__*/React.createElement(SubScore, {
    key: l,
    label: l,
    value: v
  })))), !paid ? /*#__PURE__*/React.createElement(Card, {
    accent: true,
    style: {
      width: "100%",
      textAlign: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 9999,
      background: "rgba(255,215,0,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 20,
    color: "var(--gs-gold)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 600,
      fontSize: 18,
      margin: 0
    }
  }, "D\xE9bloquer le rapport complet"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gs-muted)",
      fontSize: 14,
      marginTop: 4,
      marginBottom: 16
    }
  }, "5 recommandations personnalis\xE9es + axes d'am\xE9lioration"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 16
    }
  }, [["one_shot", "One shot", "4,99 €", null], ["monthly", "Mensuel", "9,99 €/mois", "Analyses illimitées"]].map(([k, name, price, note]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setPlan(k),
    style: {
      flex: 1,
      borderRadius: "var(--gs-radius-lg)",
      padding: 12,
      fontSize: 14,
      cursor: "pointer",
      textAlign: "center",
      background: plan === k ? "rgba(255,215,0,0.1)" : "transparent",
      border: `1px solid ${plan === k ? "var(--gs-gold)" : "var(--gs-border-strong)"}`,
      color: plan === k ? "#fff" : "var(--gs-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gs-gold)",
      fontWeight: 700,
      marginTop: 2
    }
  }, price), note && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gs-muted-2)",
      fontSize: 12,
      marginTop: 2
    }
  }, note)))), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    block: true,
    size: "lg",
    onClick: unlock
  }, "D\xE9bloquer pour ", plan === "one_shot" ? "4,99 €" : "9,99 €/mois")) : /*#__PURE__*/React.createElement(Card, {
    glow: true,
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 600,
      margin: "0 0 12px"
    }
  }, "Recommandations IA"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, ["Adopter une coiffure avec plus de volume sur les côtés", "Routine soin : nettoyant doux + hydratant SPF le matin", "Travailler la posture et l'angle du menton sur les photos", "Affiner les sourcils pour ouvrir le regard", "Privilégier des cols qui structurent la mâchoire"].map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      fontSize: 14,
      color: "#ccc",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gs-gold)",
      fontWeight: 700
    }
  }, i + 1, "."), r))))));
}
Object.assign(window, {
  GSLogin: Login,
  GSDashboard: Dashboard,
  GSScanner: Scanner,
  GSResult: Result
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shared/icon.js
try { (() => {
// Shared Lucide icon wrapper for GlowScore UI kits.
// Requires lucide UMD loaded before this file. Exposes window.GSIcon.
(function () {
  function Icon({
    name,
    size = 16,
    color = "currentColor",
    strokeWidth = 2,
    style = {}
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const host = ref.current;
      if (!host || !window.lucide) return;
      host.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      host.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          "stroke-width": strokeWidth,
          stroke: color
        },
        nameAttr: "data-lucide"
      });
    });
    return React.createElement("span", {
      ref,
      style: {
        display: "inline-flex",
        width: size,
        height: size,
        color,
        ...style
      }
    });
  }
  window.GSIcon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/icon.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.GlowBlob = __ds_scope.GlowBlob;

__ds_ns.GlassNav = __ds_scope.GlassNav;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.ScoreChip = __ds_scope.ScoreChip;

__ds_ns.ScoreRing = __ds_scope.ScoreRing;

__ds_ns.SubScore = __ds_scope.SubScore;

})();
