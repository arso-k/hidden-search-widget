const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

//--- my version
// e hap dhe e mbyll sa her e prek
search.addEventListener("click", () => {
  search.classList.add("active");
  input.focus();
});

input.addEventListener("focusout", () => {
  search.classList.remove("active");
});

//-----------
// search.addEventListener("click", () => {
//   search.classList.toggle("active");
//   input.focus();
// });
