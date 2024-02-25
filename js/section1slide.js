let listDateview = [
  { 
    img:"./images/BreadBarbershop_1920774.jpg", 
  },
  { 
    img:"./images/Sumikkogurashi2_1920774.jpg",
  },
  { 
    img:"./images/IfOnly_1920774.jpg",
  },
  { 
    img:"./images/BabyShark_1920774.jpg",
  },

];



let viewqer = document.querySelector(".viewqer");
let listview = "";

listDateview.forEach((element)=>{

    listview += `<div class="sildenum">
                    <a href="#none"><img src="${element.img}" alt=""></a>
                </div>`
              
});

viewqer.innerHTML = listview;




 //왼쪽버튼 대상 
                    
 const prevBtnqw = document.querySelector(".prevBtnqw");

 // 오른쪽 버튼 대상
 const nextBtnqw = document.querySelector(".nextBtnqw");

 // 슬라이드 화면들 선택
 const silderView = document.querySelectorAll(".viewqer > .sildenum");

 // 하단 동그라미 버튼들

 const circleBtnqw = document.querySelectorAll(".circleBtn3 > li");   

 // silder 는 버튼 이랑 동그라미 까지 다 포함되어 있음
 const silderWrap = document.querySelector(".silder");

  //슬라이드 순번값
  let sNumber = 0 ;

   //이전버튼 클릭시 

 prevBtnqw.addEventListener("click",()=>{
     prevCheck(); //이전버튼 조건문 체크 함수 호출
     silderStart(); //슬라이드 화면 전환 및 동그라미 버튼 활성비활성 함수 호출
 });


 //이후 버튼 클릭시
 nextBtnqw.addEventListener("click",()=>{
    nextCheck();
    silderStart(); //슬라이드 화면 전환 및 동그라미 버튼 활성비활성 함수 호출
 });  

 // 동그라미 버튼들 클릭시
 for(let j=0; j < circleBtnqw.length; j++){
     
     circleBtnqw[j].addEventListener("click",(e)=>{
         e.preventDefault(); 
         sNumber = j; //클릭한 동그라미 버튼 순번값을 슬라이드 순번값으로 넣어줌
         silderStart(); //슬라이드 화면 동작함수 호출



     });
 }

 //슬라이드 자동실행구간
 let autoSiled = setInterval(()=>{
     nextCheck(); // 다음화면 조건문 체크
     silderStart(); // 슬라이드 화면 전환되고 동그라미 버튼 활성 비활성


 },5000);

 //슬라이더에 마우스를 올렸을 때 자동실행을 멈춘다.
 silderWrap.addEventListener("mouseenter",()=>{
     //autoside 변수에 있는 자동실행 함수를 제거시킴
     clearInterval(autoSiled); // 


 });

 //슬라이더에 마우스를 내렸을 때 자동실행을 다시 동작하게 처리
 silderWrap.addEventListener("mouseleave",()=>{
     //autosile 변수에 자동실행 함수를 다시 새롬게 대입해서 채워줌
     autoSiled = setInterval(()=>{

         nextCheck();
         silderStart();
     },5000);

 });
 
 // 이전버튼 슬라이드 조건문 함수구간
 function prevCheck(){

     if(sNumber == 0){
         sNumber = silderView.length-1;
     }
     else{
         sNumber--;
     }
 }
     // 이후버튼 슬라이드 조건문 함수구간
 function nextCheck(){

     if(sNumber == silderView.length-1){
         sNumber = 0;
     }
     else{
         sNumber++;
     }
 }
                 
 // 슬라이드 나타나고 사라지는  & 동그라미버튼 활성비활성 함수구간
 function silderStart(){
     for(let i = 0; i < circleBtnqw.length; i++){
         circleBtnqw[i].classList.remove("on");
         silderView[i].style.opacity = 0;
         silderView[i].style.zIndex = 2;
     }

     circleBtnqw[sNumber].classList.add("on");
     silderView[sNumber].style.opacity = 1;     //z indent ,opacity 단위없음
     silderView[sNumber].style.zIndex = 3;
     
 }
