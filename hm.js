// 1 задача
document.querySelector(".btn").addEventListener("click", function () {
  const textElement = document.getElementById("text");

  if (textElement) {
    textElement.remove();
  }
});

// 2 задача
// const button = document.querySelector(".btn");
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);

// (Сначало при нажатии появится алерт с "1" далее если еще раз нажать то  "2")

// 3 задача

const btn = document.querySelector(".remove-button");

btn.addEventListener("click", function () {
  const txt = document.querySelector(".pane");
  console.log("s"); //для проверки
  if (txt) {
    txt.remove();
  }
});
// да, код похож на первую задачу, вроде задачи тоже похожи и взяла готовый html css :)

// 4
const addBtn = document.querySelector(".add");

addBtn.addEventListener("click", function () {
  const sweet = document.querySelector(".names");
  sweet.style.display =
    sweet.style.display === "none" || sweet.style.display === ""
      ? "block"
      : "none";
});
// нужно нажать имеено на [>]
