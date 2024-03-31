const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  () => {
    console.log("scroll");
    var { scrollY } = window;
    if (scrollY > lastScrollTop) {
      navbar.classList.remove("visible");
    } else if (scrollY < lastScrollTop) {
      navbar.classList.add("visible");
    }
    lastScrollTop = scrollY <= 0 ? 0 : scrollY;
  },
  { passive: true }
);

// Start - animation - scroll;
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const elements = document.querySelectorAll(".hidden");
elements.forEach((element) => myObserver.observe(element));
// End - animation - scroll;

// Barra-de-tempo-de-estudos-start
const myObserver2 = new IntersectionObserver((measure11) => {
  measure11.forEach((measure111) => {
    if (measure111.isIntersecting) {
      measure111.target.classList.add("measure1");
    } else {
      measure111.target.classList.remove("measure1");
    }
  });
});
const measure1 = document.querySelectorAll(".measure-1");
measure1.forEach((measureOne) => myObserver2.observe(measureOne));

const myObserver3 = new IntersectionObserver((measure22) => {
  measure22.forEach((measure222) => {
    if (measure222.isIntersecting) {
      measure222.target.classList.add("measure2");
    } else {
      measure222.target.classList.remove("measure2");
    }
  });
});
const measure2 = document.querySelectorAll(".measure-2");
measure2.forEach((measureTwo) => myObserver3.observe(measureTwo));
// Barra-de-tempo-de-estudos-end
