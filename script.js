const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelectorAll(".prev");
const nextBtn = document.querySelectorAll(".next");

slides[1].classList.add("inactive");
let j = 0;
for (i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener("click", function () {
    slides[j].classList.add("inactive");
    j++;
    if (j >= slides.length) {
      j = 0;
      slides[j].classList.remove("inactive");
    } else {
      slides[j].classList.remove("inactive");
    }
  });
}
for (a = 0; a < prevBtn.length; a++) {
  prevBtn[a].addEventListener("click", function () {
    slides[j].classList.add("inactive");
    j--;
    if (j < 0) {
      j = Number(slides.length - 1);
      slides[j].classList.remove("inactive");
    } else {
      slides[j].classList.remove("inactive");
    }
  });
}
