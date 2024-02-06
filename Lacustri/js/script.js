// Animazione scroll che appare e scompare
window.addEventListener("scroll", function () {
  let elementi = document.querySelectorAll(".elemento");
  let finestraPos = window.innerHeight;

  elementi.forEach(function (elemento) {
    let elementoPos = elemento.getBoundingClientRect().top;

    if (elementoPos < finestraPos - 100) {
      elemento.classList.add("visibile");
    } else {
      elemento.classList.remove("visibile");
    }
  });
});
