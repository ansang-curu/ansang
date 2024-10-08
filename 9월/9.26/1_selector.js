// get 매서드
let title = document.getElementById("title");
console.log(title);
title.textContent = "헬스 3대 운동";

let items = document.getElementsByClassName("item");
console.log(items);
console.log("스쿼트", items[0]);
console.log("벤치프레스", items[1]);
console.log("데드리프트", items[2]);
// let 변수이름=넣을내용
// console.log 콘솔에 내용넣기
let lilist = document.getElementsByTagName("li");
console.log(lilist);

// html 요소 쿼리
let h2 = document.querySelector("#title");
console.log("h2", h2);

let itemall = document.querySelectorAll(".item");
console.log("itemall", itemall);
console.log("itemall[0]", itemall[0]);
console.log("itemall[1]", itemall[1]);
console.log("itemall[2]", itemall[2]);

// h2.textContent = "<span>운동!!</span>";
// h2.innerHTML = "<span>운동@@</span>";
// console.log(h2.textContent);

let input = document.querySelector("input");
input.setAttribute("placeholder", "변경된 운동을 입력해주세요");
input.setAttribute("required", "");
input.removeAttribute("placeholder");

let helloitem = document.querySelector(".hello");
console.log("helloitem", helloitem);
// helloitem.style.color = "white";
// helloitem.style.backgroundColor = "black";

helloitem.classList.add("dark");
helloitem.classList.remove("dark");
