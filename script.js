const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
const list = document.querySelectorAll(".list");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

list.forEach((elemento) =>
  elemento.addEventListener("click", () => {
    if (elemento.classList.contains("active")) {
      elemento.classList.remove("active");
    } else {
      list.forEach((element) => element.classList.remove("active"));
      elemento.classList.add("active");
    }
  })
);

/* código imitando a 369 */
/* list.forEach((elemento) =>
  elemento.addEventListener("click", () => {
    if (elemento.classList.contains("list")) {
      list.forEach((element) => element.classList.remove("active"));
      elemento.classList.add("active");
    }
  })
); */

/* código para eliminar botones activos de forma grupal */
/* list.forEach((elemento) =>
  elemento.addEventListener("click", () => {
    if (elemento.classList.contains("active")) {
      list.forEach((element) => element.classList.remove("active"));
    } else {
      elemento.classList.add("active");
    }
  })
);
 */
