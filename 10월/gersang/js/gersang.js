//오늘의 음식
let btn_todayfood = document.querySelector(".btn_todayfood");
console.log(btn_todayfood);
let foodAnswer = document.querySelector(".foodAnswer");
let foodmenu = [
  "케이크",
  "마카롱",
  "커리",
  "난",
  "샐러드",
  "오니기리",
  "우동",
  "김밥",
  "찜닭",
  "떡볶이",
  "비빔밥",
  "짜장면",
  "짬뽕",
  "탕수육",
  "족발",
  "불고기",
  "삼겹살",
  "생선구이",
  "게장",
  "꼬치",
  "동파육",
  "우육면",
  "국밥",
  "샌드위치",
  "낙지볶음",
  "오징어무침",
  "파전",
  "흑염소탕",
  "찌개",
  "떡",
  "곰탕",
];
// foodAnswer.textContent = "오늘의 음식을 선택하세요!";
btn_todayfood.addEventListener("click", randomfood);
function randomfood() {
  let randomIndex = Math.floor(Math.random() * foodmenu.length);
  let selectFood = foodmenu[randomIndex];
  foodAnswer.textContent = `오늘의 음식: ${selectFood}`;
}

//--------------------메모넣기------------------------------

let textmemo1 = document.querySelector(".textmemo1");

textmemo1.addEventListener("keydown", addmemo);

function addmemo(add) {
  let textmemo2 = document.querySelector(".textmemo2");
  if (add.key === "Enter") {
    add.preventDefault();

    textmemo2.innerHTML += textmemo1.value + "\n";
    textmemo1.value = "";
  }
}
// --------------------------------------------
//계산기----------------------------------------------

$(".btns button").click(function () {
  let currentInput = $(".calculInput").val();
  let btntext = $(this).text();

  if (btntext === "=") {
    try {
      let answer = math.evaluate(currentInput); // math.js 사용
      $(".calculInput").val(answer); // 결과를 입력 필드에 설정
      // alert(answer); // 결과를 알림으로 표시
    } catch (error) {
      $(".calculInput").val("Error"); // 오류 발생 시 "Error" 표시
    }
  } else if (btntext === "+-") {
    let minus = currentInput * -1;
    $(".calculInput").val(minus);
  } else {
    $(".calculInput").val(currentInput + btntext); // 버튼 텍스트를 입력 필드에 추가
  }
});

$(".btns .clearBtn").click(function () {
  $(".calculInput").val("");
});
