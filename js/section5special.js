let specialDate = [
  { 
      spanSrc:"./images/su1.png",
      title:"SUITE CINEMA",
      title2 :"#호텔 컨셉의 프리미엄관"
  },
  { 
      spanSrc:"./images/su2.png",
      title:"CINE & LIVINGROOM",
      title2 :"#신개념 소셜 상영관"
  },
  { 
      spanSrc:"./images/su3.png",
      title:"4DX",
      title2 :"#모션시#오감체험"
  },
  { 
      spanSrc:"./images/su4.png",
      title:"CINE de CHEF",
      title2 :"#셰프가 있는 영화관"
  },
];


let textWrap = document.querySelector(".specialbox2");
let speciallist = "";

specialDate.forEach(function(element){

  speciallist += `<div class="text23">
            <div class="src22">
            <a href="#none"><img src=${element.spanSrc}></a>
            </div>
            <div class="text32">
                <h2>${element.title}</h2>
                <h2>${element.title2}</h2>
            </div>
          </div>`
});

textWrap.innerHTML = speciallist;



const biggImg = document.querySelector(".picc img");
const ssmallImg = document.querySelectorAll(".src22 img");


ssmallImg.forEach(function(item,index){

    item.addEventListener("mouseenter",function(){

        let srcValue = item.getAttribute("src");
        biggImg.setAttribute("src",srcValue)
        biggImg.style.backgroundImage = "url("+srcValue+")";
        
    });

});
