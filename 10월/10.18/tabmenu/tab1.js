//클릭했을때 active 지우고 active 넣기
//디스플레이 none바꿔주기?
//menu2클릭시 menu1,menu3 none     menu3클릭시 menu1,2, none
//> 메뉴2면 1,3에 display none을 add로 넣는다? 방법1
// menu2클릭시 active설정하고 1,3에는 active를 없앤다. active시 보이게하는걸 추가한다 방법2
//

// let tabs1=document.querySelector('.tabs1')
// let tabs2=document.querySelector('.tabs2')
// let tabs3=document.querySelector('.tabs3')

// tabs3.addEventListener('click',function({
//     let tabContent=document.querySelector('#tabContent')

// }))

const targetLink = document.querySelectorAll(".tab_menu a");
const tabContent = document.querySelectorAll("#tabContent>div");

targetLink.forEach(function (link) {
  //타겟링크 가져옴 >각각 함수 적용
  link.addEventListener("click", function (e) {
    //각각 이벤트리스너추가
    targetLink.forEach(function (link2) {
      link2.classList.remove("active");
    });
    e.preventDefault();
    let orgTarget = e.target.getAttribute("href");
    //get attribute 속성값 읽어오기
    // alert(orgTarget);

    e.target.classList.add("active"); //이건 왜안됨
    let tabTarget = orgTarget.replace("#", "");
    // alert(tabTarget);
    tabContent.forEach(function (content) {
      content.style.display = "none";
    });
    document.getElementById(tabTarget).style.display = "block";

    targetLink.forEach(function (link2) {
      //   link2.classList.remove("active");
      //   this.target.classList.add("active");
    });
    // e.target.classList.add("active");
  });
});
