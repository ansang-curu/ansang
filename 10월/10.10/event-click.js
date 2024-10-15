let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
// console.log(btn1, btn2);
btn1.onclick = function () {
  alert("hello 프로퍼티리스너");
};
btn2.addEventListener("click", function () {
  alert("addeventListener");
});
btn2.addEventListener("click", helloEvent1);
function helloEvent1() {
  alert("hello event1");
}
btn2.removeEventListener("click", helloEvent1);
