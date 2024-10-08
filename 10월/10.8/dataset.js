let h2 = document.querySelector("h2");
h2.dataset.test = "hello javascript!";
console.log(h2.dataset.test);

let img = document.querySelector("img");
let lilist = document.querySelectorAll("li");
console.log("lilist:", lilist);
lilist[0].addEventListener("click", function (event) {
  img.setAttribute("src", event.target.dataset.img);
});
lilist[1].addEventListener("click", function (event) {
  img.setAttribute("src", event.target.dataset.img);
});
