const items = document.querySelectorAll(
  ".skill-row, .project-card, .contact-me"
);

const reveal = () => {
  items.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const viewCursor = document.querySelector(".view-cursor");
const projectItems = document.querySelectorAll(".work-item");

window.addEventListener("mousemove", (e) => {
  viewCursor.style.left = e.clientX + "px";
  viewCursor.style.top = e.clientY + "px";
});

projectItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    viewCursor.style.opacity = "1";
  });

  item.addEventListener("mouseleave", () => {
    viewCursor.style.opacity = "0";
  });
});
const track = document.getElementById("projectTrack");
let slides = document.querySelectorAll(".project-card-new");

let index = 0;
const gap = 40;

// Clone first and last slides for seamless loop
const firstClone = slides[0].cloneNode(true);
const secondClone = slides[1].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.appendChild(secondClone);
track.insertBefore(lastClone, slides[0]);

slides = document.querySelectorAll(".project-card-new");

// Start from first real slide
const slideWidth = slides[0].offsetWidth + gap;
track.style.transform = `translateX(-${slideWidth}px)`;
index = 1;

function autoSlide() {
  index++;
  track.style.transition = "transform 0.7s ease";
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

setInterval(autoSlide, 3000);

track.addEventListener("transitionend", () => {
  if (index >= slides.length - 2) {
    track.style.transition = "none";
    index = 1;
    track.style.transform = `translateX(-${slideWidth}px)`;
  }

  if (index === 0) {
    track.style.transition = "none";
    index = slides.length - 3;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }
});



