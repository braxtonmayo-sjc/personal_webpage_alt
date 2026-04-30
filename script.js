const Themebutton = document.getElementById("themeBtn");

let darkMode = false;
Themebutton.addEventListener("click", () => {
  darkMode = !darkMode; // flip between true/false
  document.body.classList.toggle("dark", darkMode);
 
  if (darkMode) {
    Themebutton.textContent = "Switch to Light Mode";
  } else {
    Themebutton.textContent = "Switch to Dark Mode";
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[slideIndex - 1].classList.add("active");
}
