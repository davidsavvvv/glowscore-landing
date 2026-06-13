// Shared Lucide icon wrapper for GlowScore UI kits.
// Requires lucide UMD loaded before this file. Exposes window.GSIcon.
(function () {
  function Icon({ name, size = 16, color = "currentColor", strokeWidth = 2, style = {} }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const host = ref.current;
      if (!host || !window.lucide) return;
      host.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      host.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, "stroke-width": strokeWidth, stroke: color },
        nameAttr: "data-lucide",
      });
    });
    return React.createElement("span", {
      ref,
      style: { display: "inline-flex", width: size, height: size, color, ...style },
    });
  }
  window.GSIcon = Icon;
})();
