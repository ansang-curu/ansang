let rectangle = document.querySelector("#rectangle");

rectangle.addEventListener("mousedown", mousedown);
function mousedown() {
  console.log("마우스다운 됏니?");
}
rectangle.addEventListener("mouseup", mouseup);
function mouseup() {
  console.log("마우스업 됏니?");
}
