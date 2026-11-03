const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (e) {
    const el = e.target;
    if (e.isIntersecting) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
      const salioPorArriba = e.boundingClientRect.top < 0;
      el.classList.toggle("desde-arriba", salioPorArriba);
      el.classList.toggle("desde-abajo", !salioPorArriba);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(function (el) {
  el.classList.add("desde-abajo");
  observador.observe(el);
});