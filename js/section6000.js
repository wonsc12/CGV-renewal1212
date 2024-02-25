let countValue = [
  {
  plus:30,
  tag:".count1 p",
  complete:6000,
  loop:50   
},




];

let contStart = document.querySelector(".section8000").offsetTop;

let moveCheck = true;

window.addEventListener("scroll",function(){

  let scTop = window.scrollY;
  
  if(scTop >= contStart-400){

      if(moveCheck == true){

          countValue.forEach(function(el){

              countUp(el.plus,el.tag,el.complete,el.loop);
          });
      }
  }
});       

function countUp(inc,sel,des,speed){
moveCheck = false;

let num = 0;
let numChange = "";  //숫자 카운트 되는 것을 , 붙여서 변환되는 데이터를 받아주는 변수                           
let desChange = ""; //숫자 카운트 다끝나고 마지막 숫자를 ,붙여서  변환하고 담아주는 변수

let autoCount = setInterval(function(){

  num += inc;
  if(num >= des){
      clearInterval(autoCount);
       // 다 올라간 숫자
       desChange = des.toLocaleString("ko-kr");
      document.querySelector(sel).innerHTML = desChange;
  }
  else{
       // 다 증가된 숫자
       numChange = num.toLocaleString("ko-kr");
      document.querySelector(sel).innerHTML = numChange;
  }
},speed);
}

  