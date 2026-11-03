(function () {
  const raiz = document.documentElement;
  const MODOS = ["auto", "claro", "oscuro"];
  const ICONOS = { auto: "bi-clock-history", claro: "bi-sun", oscuro: "bi-moon-stars" };
  const TITULOS = { auto: "Automático (según la hora)", claro: "Modo claro", oscuro: "Modo oscuro" };

  function modoGuardado() {
    try {
      const m = localStorage.getItem("modo-tema");
      return MODOS.includes(m) ? m : "auto";
    } catch (e) { return "auto"; }
  }

  function temaPorHora() {
    const h = new Date().getHours();
    return (h >= 7 && h < 19) ? "light" : "dark";
  }

  function aplicar() {
    const modo = modoGuardado();
    const tema = modo === "auto" ? temaPorHora() : (modo === "claro" ? "light" : "dark");
    raiz.setAttribute("data-bs-theme", tema);

    const btn = document.getElementById("btn-tema");
    const icono = document.getElementById("icono-tema");
    if (btn && icono) {
      icono.className = "bi " + ICONOS[modo];
      btn.title = TITULOS[modo];
    }
  }

  aplicar(); // se ejecuta antes de pintar la página, así no parpadea

  document.addEventListener("DOMContentLoaded", function () {
    aplicar();
    document.getElementById("btn-tema").addEventListener("click", function () {
      const siguiente = MODOS[(MODOS.indexOf(modoGuardado()) + 1) % MODOS.length];
      try { localStorage.setItem("modo-tema", siguiente); } catch (e) {}
      aplicar();
    });
  });

  setInterval(function () {
    if (modoGuardado() === "auto") aplicar();
  }, 60000);
})();