let specialDate2 = [
  { 
      spanSrc:"./images/fd1.jpg",
      title:"1",
      title2 :"노량 죽음의 바다"
  },
  { 
      spanSrc:"./images/fd4.jpg",
      title:"2",
      title2 :"윙카"
  },
  { 
      spanSrc:"./images/fd2.jpg",
      title:"3",
      title2 :"서울의봄"
  },
  { 
      spanSrc:"./images/fd3.png",
      title:"4",
      title2 :"돌핀"
  },
];


let specialboxse2 = document.querySelector(".specialboxse2");
let speciallist2 = "";

specialDate2.forEach(function(element){

  speciallist2 += `<div class="text23sear">
                    <div class="srcse22">
                    <a href="#none"><img src=${element.spanSrc}></a>
                    </div>
                    <div class="textse32">
                        <h2>${element.title}</h2>
                        <h2>${element.title2}</h2>
                    </div>
                  </div>`
});

specialboxse2.innerHTML = speciallist2;



const biggImg2 = document.querySelector(".piccse img");
const ssmallImg2 = document.querySelectorAll(".srcse22 img");


ssmallImg2.forEach(function(item,index){

    item.addEventListener("mouseenter",function(){

        let srcValue = item.getAttribute("src");
        biggImg2.setAttribute("src",srcValue)
        biggImg2.style.backgroundImage = "url("+srcValue+")";
        
    });

});