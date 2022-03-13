const startSection = document.getElementById("section_1");
const differentSection = document.getElementById("section_2");
const workSection = document.getElementById("section_3");

const loadSection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

const observer = new IntersectionObserver(loadSection, {
  root: null,
  threshold: 0.5,
});

observer.observe(differentSection);
observer.observe(workSection);

setTimeout(() => {
  startSection.classList.add("visible");
}, 1000);
