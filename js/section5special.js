let specialDate = [
  { 
      spanSrc:"",
      title:"SUITE CINEMA",
      title2 :"#호텔 컨셉의 프리미엄관"
  },
  { 
      spanSrc:"",
      title:"CINE & LIVINGROOM",
      title2 :"#신개념 소셜 상영관"
  },
  { 
      spanSrc:"",
      title:"4DX",
      title2 :"#모션시#오감체험"
  },
  { 
      spanSrc:"",
      title:"CINE de CHEF",
      title2 :"#셰프가 있는 영화관"
  },
];


let textWrap = document.querySelector(".specialbox2");
let speciallist = "";

specialDate.forEach(function(element){

  speciallist += `<div class="text23">
            <div class="src22">
                <img src=${element.spanSrc}>
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

    item.addEventListener("click",function(){

        let srcValue = item.getAttribute("src");
        biggImg.setAttribute("src",srcValue)
        biggImg.style.backgroundImage = "url("+srcValue+")";
        
    });

});
