const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = function () {
  navigation.classList.toggle("open");
};

const list = document.querySelectorAll(".list");

/* function activarLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activarLink));
 */

list.forEach((elemento) =>
  elemento.addEventListener("click", () => {
    list.forEach((element) => element.classList.remove("active"));
    if (elemento.classList.contains("list")) {
      elemento.classList.add("active");
    }
  })
);
