/**
 * GRINGO'S — DESIGN SYSTEM
 * Extraído de: landing-gringos-corporativo, catalogo-gringos, ecommerce-heartland
 * Versão: 1.0 | 2026-04-27
 * Desenvolvido com AIVOX | arthurr7070.github.io/AIVOX-LEADING
 */

const GringosDS = {

  meta: {
    brand:   "Gringo's",
    version: "1.0.0",
    created: "2026-04-27",
    pages: [
      "pages/landing-gringos-corporativo.html",
      "pages/catalogo-gringos.html",
      "pages/ecommerce-heartland.html",
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // TEMAS
  // ══════════════════════════════════════════════════════════════

  themes: {

    /**
     * BRAND — Identidade Principal
     * Usada em: Landing Corporativa + Catálogo
     * Estilo: Editorial Luxury com acento Dourado
     */
    brand: {
      colors: {
        black:    "#0F0F0F",   // preto principal
        white:    "#FFFFFF",
        cream:    "#F7F4EF",   // creme quente — backgrounds alternados
        border:   "#E8E2D9",   // borda quente
        gold:     "#B8924A",   // dourado principal — CTA e destaques
        goldLt:   "#D4AA6A",   // dourado claro — hover, topbar
        goldDk:   "#8C6E18",   // dourado escuro — variação profunda
        gray:     "#6B6B6B",   // texto secundário
        whatsapp: "#25D366",
        danger:   "#FF6B6B",
        error:    "#CC4444",
      },
      fonts: {
        heading:  "'DM Serif Display', serif",     // editorial — títulos de seção, hero
        display:  "'Bebas Neue', sans-serif",       // impacto — números, banners, watermarks
        body:     "'DM Sans', sans-serif",          // UI, parágrafos, botões, nav
        googleImport: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=Bebas+Neue&display=swap",
      },
    },

    /**
     * HEARTLAND — Identidade Alternativa
     * Usada em: E-commerce Heartland
     * Estilo: Luxury B&W Editorial, sem gold
     */
    heartland: {
      colors: {
        black:  "#0C0C0C",
        white:  "#FFFFFF",
        off:    "#F7F6F4",   // off-white — substitui cream
        gray:   "#6B6B6B",
        light:  "#AEAEAE",   // cinza claro — elementos secundários
        border: "#E2E2E2",
      },
      fonts: {
        heading:    "'Playfair Display', serif",      // display editorial
        body:       "'Barlow', sans-serif",           // corpo
        condensed:  "'Barlow Condensed', sans-serif", // UI labels, nav, tags
        googleImport: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;500;600;700;800&display=swap",
      },
    },
  },

  // ══════════════════════════════════════════════════════════════
  // TIPOGRAFIA (compartilhada)
  // ══════════════════════════════════════════════════════════════

  typography: {
    scale: {
      watermark: "clamp(100px, 18vw, 240px)", // texto decorativo de fundo (Bebas Neue)
      hero:      "clamp(36px, 4.5vw, 60px)",  // headline principal (DM Serif)
      heroLg:    "clamp(50px, 5.5vw, 92px)",  // headline grande (Playfair)
      display:   "clamp(42px, 6vw, 82px)",    // banners
      section:   "clamp(30px, 3.5vw, 48px)",  // títulos de seção
      card:      "clamp(28px, 3vw, 42px)",    // título de card grande
      xl:        "17px",
      lg:        "16px",
      md:        "15px",
      base:      "14px",
      sm:        "13px",
      xs:        "12px",
      "2xs":     "11px",
      "3xs":     "10px",   // eyebrows, section labels
      "4xs":     "9px",    // badges, tags
      "5xs":     "8px",    // logo tag
    },
    weight: {
      light:      300,
      regular:    400,
      medium:     500,
      semibold:   600,
      bold:       700,
      extrabold:  800,
    },
    letterSpacing: {
      eyebrow:  "0.22em",   // section labels, eyebrows
      badge:    "0.14em",   // badges, page tags
      nav:      "0.08em",   // navegação
      btn:      "0.10em",   // botões
      tight:    "0.06em",   // subtítulos
      wide:     "0.35em",   // heartland hero eyebrow
    },
    lineHeight: {
      tight:   1.05,
      heading: 1.1,
      subhead: 1.4,
      body:    1.65,
      loose:   1.75,
      relaxed: 1.85,
    },
  },

  // ══════════════════════════════════════════════════════════════
  // ESPAÇAMENTO
  // ══════════════════════════════════════════════════════════════

  spacing: {
    xs:   "12px",
    sm:   "16px",
    md:   "24px",
    lg:   "40px",
    xl:   "56px",
    "2xl": "72px",
    "3xl": "96px",
    "4xl": "100px",
  },

  // ══════════════════════════════════════════════════════════════
  // LAYOUT
  // ══════════════════════════════════════════════════════════════

  layout: {
    containerMax:  "1320px",   // landing + catálogo
    containerMaxLg: "1400px", // catálogo extendido
    containerPad:  "0 56px",
    headerHeight:  "68px",    // brand / 72px heartland
    sectionPad:    "96px 0",
    gapMosaic:     "2px",     // editorial fashion gap
    gapGrid:       "24px",
    gapLarge:      "64px",
    gapXLarge:     "80px",
  },

  // ══════════════════════════════════════════════════════════════
  // SOMBRAS
  // ══════════════════════════════════════════════════════════════

  shadows: {
    header:    "0 1px 16px rgba(0,0,0,.05)",
    cardRest:  "0 6px 24px rgba(0,0,0,.06)",
    cardHover: "0 12px 40px rgba(0,0,0,.07)",
    gold:      "0 6px 28px rgba(184,146,74,.10)",
    whatsapp:  "0 8px 24px rgba(37,211,102,.30)",
  },

  // ══════════════════════════════════════════════════════════════
  // MOTION
  // ══════════════════════════════════════════════════════════════

  motion: {
    ease:  "cubic-bezier(0.25, 0.46, 0.45, 0.94)",  // padrão suave
    fast:  "cubic-bezier(0.40, 0.00, 0.20, 1.00)",  // snappy
    durations: {
      fast:    "0.15s",
      normal:  "0.20s",
      medium:  "0.25s",
      slow:    "0.35s",
      image:   "0.55s",  // hover em imagens
      marquee: "22s",    // animação marquee
    },
    patterns: {
      hoverLift:     "transform: translateY(-2px)",
      imageScale:    "transform: scale(1.06)",
      imageSoft:     "transform: scale(1.04)",
      goldSlideIn:   "scaleX(0) → scaleX(1), transform-origin: left",
      marqueeLoop:   "translateX(0) → translateX(-50%), linear infinite",
    },
  },

  // ══════════════════════════════════════════════════════════════
  // COMPONENTES
  // ══════════════════════════════════════════════════════════════

  components: {

    buttons: {
      primary: {
        bg: "#B8924A", color: "#FFFFFF",
        padding: "10px 24px", fontSize: "11px",
        fontWeight: 700, letterSpacing: "0.10em",
        textTransform: "uppercase",
        hover: { bg: "#D4AA6A" },
      },
      black: {
        bg: "#0F0F0F", color: "#FFFFFF",
        padding: "17px 40px", fontSize: "12px",
        fontWeight: 800, letterSpacing: "0.12em",
        hover: { bg: "#2a2a2a", transform: "translateY(-2px)" },
      },
      ghost: {
        bg: "transparent", color: "#0F0F0F",
        border: "1px solid #E8E2D9", padding: "15px 28px",
        fontSize: "12px", fontWeight: 500,
        hover: { borderColor: "#0F0F0F" },
      },
      whatsapp: {
        bg: "#25D366", color: "#FFFFFF",
        padding: "16px 32px", fontSize: "13px",
        fontWeight: 700,
        hover: { bg: "#1ebe5d", transform: "translateY(-2px)", shadow: "0 8px 24px rgba(37,211,102,.30)" },
      },
    },

    header: {
      height: "68px", bg: "#FFFFFF",
      border: "1px solid #E8E2D9",
      shadow: "0 1px 16px rgba(0,0,0,.05)",
      position: "sticky", top: 0, zIndex: 100,
    },

    topbar: {
      bg: "#0F0F0F", color: "#FFFFFF",
      fontSize: "12px", fontWeight: 500,
      letterSpacing: "0.08em", padding: "11px 20px",
    },

    cards: {
      feature: {
        bg: "#FFFFFF", border: "1px solid #E8E2D9",
        borderLeft: "3px solid #B8924A",
        padding: "20px 24px",
        hoverShadow: "0 6px 24px rgba(0,0,0,.06)",
      },
      change: {
        bg: "#FFFFFF", border: "1px solid #E8E2D9",
        padding: "36px 28px",
        hoverBorder: "#B8924A",
        hoverShadow: "0 12px 40px rgba(0,0,0,.07)",
        topAccent: "3px solid #B8924A", // slides in on hover
      },
      product: {
        aspectRatio: "3/4",
        gradient: "linear-gradient(to top, rgba(0,0,0,.65), transparent)",
        hoverScale: "scale(1.06)",
      },
    },

    sectionLabel: {
      fontSize: "10px", fontWeight: 700,
      letterSpacing: "0.22em", textTransform: "uppercase",
      color: "#B8924A",
      before: { width: "20px", height: "1px", bg: "#B8924A" },
    },

    marquee: {
      animation: "22–26s linear infinite",
      variants: {
        black: { bg: "#0F0F0F", color: "rgba(255,255,255,.5)" },
        gold:  { bg: "#B8924A", color: "rgba(0,0,0,.6)" },
        cream: { bg: "#F7F4EF", color: "#0F0F0F" },
      },
    },

    videoBadge: {
      bg: "rgba(255,255,255,.95)",
      backdropFilter: "blur(8px)",
      padding: "12px 20px",
      borderLeft: "3px solid #B8924A",
    },

    darkSection: {
      bg: "#0F0F0F",
      titleColor: "#FFFFFF",
      subColor: "rgba(255,255,255,.45)",
      borderColor: "rgba(255,255,255,.06)",
      watermarkColor: "rgba(255,255,255,.03)",
    },

    filterBar: {
      bg: "#F7F4EF",
      border: "1px solid #E8E2D9",
      btnActive: { bg: "#0F0F0F", color: "#FFFFFF" },
    },

    sizeSelector: {
      size: "44px",
      border: "1.5px solid #E8E2D9",
      active: { bg: "#0F0F0F", color: "#FFFFFF" },
    },

    colorSwatch: {
      size: "28px",
      active: "box-shadow: 0 0 0 3px #FFF, 0 0 0 5px #0F0F0F",
    },
  },

  // ══════════════════════════════════════════════════════════════
  // UTILITÁRIO — Gerar CSS variables
  // ══════════════════════════════════════════════════════════════

  /**
   * Gera string com CSS custom properties do tema escolhido.
   * Uso: document.documentElement.style.cssText = GringosDS.toCSSVars('brand')
   */
  toCSSVars(theme = "brand") {
    const t = this.themes[theme];
    if (!t) { console.error(`Tema "${theme}" não existe.`); return ""; }

    const c = t.colors;
    const f = t.fonts;

    const vars = {
      "--black":   c.black,
      "--white":   c.white,
      "--cream":   c.cream   || c.off   || "#F7F4EF",
      "--border":  c.border,
      "--gold":    c.gold    || "transparent",
      "--gold-lt": c.goldLt  || "transparent",
      "--gold-dk": c.goldDk  || "transparent",
      "--gray":    c.gray,
      "--ff-h":    f.heading,
      "--ff-big":  f.display || f.condensed,
      "--ff-b":    f.body,
      "--ease":    this.motion.ease,
      "--fast":    this.motion.fast,
    };

    return Object.entries(vars)
      .map(([k, v]) => `${k}: ${v};`)
      .join("\n");
  },

  /**
   * Injeta o tema no :root da página atual.
   * Uso: GringosDS.applyTheme('heartland')
   */
  applyTheme(theme = "brand") {
    const vars = this.toCSSVars(theme);
    const style = document.createElement("style");
    style.id = "gringos-ds-theme";
    document.getElementById("gringos-ds-theme")?.remove();
    style.textContent = `:root { ${vars} }`;
    document.head.appendChild(style);
    console.log(`[Gringo's DS] Tema "${theme}" aplicado.`);
  },

  /**
   * Log resumido no console para inspeção rápida.
   */
  inspect() {
    console.group("Gringo's Design System v" + this.meta.version);
    console.log("Temas disponíveis:", Object.keys(this.themes).join(", "));
    console.log("Brand colors:", this.themes.brand.colors);
    console.log("Heartland colors:", this.themes.heartland.colors);
    console.log("Fontes Brand:", this.themes.brand.fonts);
    console.log("Fontes Heartland:", this.themes.heartland.fonts);
    console.log("Motion:", this.motion);
    console.groupEnd();
  },
};

// ── Export ──────────────────────────────────────────────────────
if (typeof module !== "undefined" && module.exports) {
  module.exports = GringosDS;
}
