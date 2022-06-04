window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});


// scroll
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// home
const home = document.querySelector('.home');

home.addEventListener("click" ,function(e) {
  e.preventDefault();
  scroll({
    top: 0,
    behavior: "smooth",
  });
})


// modal
const openModalBtn = document.querySelectorAll(".open1");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal1");
const modalContainer = document.querySelector(".modal-container");

// open modal
openModalBtn.forEach((openModal) => {
  openModal.addEventListener("click", () => {
    modal.classList.remove("hide");
    modalContainer.classList.remove("hide");
  });
});

closeModal.addEventListener("click", () => {
  setTimeout(() => {
    modal.classList.add("hide");
  }, 800);
  modalContainer.classList.add("hide");
});

