let tabDate = [
  { 
      spanSrc:"./images/gg1.jpg",
      title:"안개의호흡! 패키지",
      price :"22,000원",
      spanSrc2:"./images/gg2.jpg",
      title2:"사랑의호흡! 패키지",
      price2 :"22,000원",
      spanSrc3:"./images/gg3.jpg",
      title3:"우리 패키지",
      price3 :"61,000원",
      spanSrc4:"./images/gg4.jpg",
      title4:"스페셜 패키지",
      price4 :"56,000원"
  },
];


let tabSet = document.querySelector(".tabbox2");
let tablist = "";

tabDate.forEach(function(element){

  tablist += `<div class="text23">

                <div class="tabs">
                  <div class="tabtext">
                    <div class="text32">
                      <div class="src22">
                      <a href="#none"><img src=${element.spanSrc}></a>
                      </div>
                      <h2><a href="#none">${element.title}</a></h2>
                      <h3><a href="#none">${element.price}</a></h3>
                    </div>
                    <div class="text32">
                      <div class="src22">
                      <a href="#none"><img src=${element.spanSrc2}></a>
                      </div>
                      <h2><a href="#none">${element.title2}</a></h2>
                      <h3><a href="#none">${element.price2}</a></h3>
                    </div>
                  </div>
                  <div class="tabtext">
                    <div class="text32">
                      <div class="src22">
                      <a href="#none"><img src=${element.spanSrc3}></a>
                      </div>
                      <h2><a href="#none">${element.title3}</a></h2>
                      <h3><a href="#none">${element.price3}</a></h3>
                    </div>
                    <div class="text32">
                      <div class="src22">
                      <a href="#none"><img src=${element.spanSrc4}></a>
                      </div>
                      <h2><a href="#none">${element.title4}</a></h2>
                      <h3><a href="#none">${element.price4}</a></h3>
                    </div>
                  </div>
                </div>
              </div>`
});

tabSet.innerHTML = tablist;



let tabDate2 = [
  { 
      spanSrc:"./images/gold.jpg",
      title:"CGV 골드클래스",
      price :"40,000원",
      spanSrc2:"./images/gold2.jpg",
      title2:"CGV 씨네드쉐프 관람권",
      price2 :"50,000원",
      spanSrc3:"./images/movie.jpg",
      title3:"CGV 영화관람권",
      price3 :"13,000원",
      spanSrc4:"./images/4dx.jpg",
      title4:"4DX관람권",
      price4 :"19,000원"
  },
];


let tabSet2 = document.querySelector(".tabbox22");
let tablist2 = "";

tabDate2.forEach(function(element){

              tablist2 += `<div class="text23">

                            <div class="tabs">
                              <div class="tabtext">
                                <div class="text32 textop">
                                  <div class="src22">
                                  <a href="#none"><img src=${element.spanSrc}></a>
                                  </div>
                                  <h2><a href="#none">${element.title}</a></h2>
                                  <h3><a href="#none">${element.price}</a></h3>
                                </div>
                                <div class="text32 textop">
                                  <div class="src22">
                                  <a href="#none"><img src=${element.spanSrc2}></a>
                                  </div>
                                  <h2><a href="#none">${element.title2}</a></h2>
                                  <h3><a href="#none">${element.price2}</a></h3>
                                </div>
                              </div>
                              <div class="tabtext">
                                <div class="text32">
                                  <div class="src22">
                                  <a href="#none"><img src=${element.spanSrc3}></a>
                                  </div>
                                  <h2><a href="#none">${element.title3}</a></h2>
                                  <h3><a href="#none">${element.price3}</a></h3>
                                </div>
                                <div class="text32 texttt">
                                  <div class="src22">
                                  <a href="#none"><img src=${element.spanSrc4}></a>
                                  </div>
                                  <h2><a href="#none">${element.title4}</a></h2>
                                  <h3><a href="#none">${element.price4}</a></h3>
                                </div>
                              </div>
                            </div>
                          </div>`
});

tabSet2.innerHTML = tablist2;



let tabDate3 = [
  { 
      spanSrc:"./images/vaca.jpg",
      title:"CGV바캉스",
      price :"충전형 선불 카드",
      spanSrc2:"./images/va2.jpg",
      title2:"PACONNIE A형",
      price2 :"충전형 선불 카드",
      spanSrc3:"./images/va3.jpg",
      title3:"PACONNIE C형",
      price3 :"충전형 선불 카드",
      spanSrc4:"./images/va4.png",
      title4:"CJ 기프트카드",
      price4 :"CJ ONE에서 구매"
  },
];


let tabSet3 = document.querySelector(".tabbox33");
let tablist3 = "";

tabDate3.forEach(function(element){

  tablist3 += `<div class="text23">

                <div class="tabs">
                  <div class="tabtext">
                    <div class="text32 textop">
                      <div class="src22">
                      <a href="#none"><img src=${element.spanSrc}></a>
                      </div>
                      <h2><a href="#none">${element.title}</a></h2>
                      <h3><a href="#none">${element.price}</a></h3>
                    </div>
                    <div class="text32 textop">
                      <div class="src22">
                      <a href="#none"><img src=${element.spanSrc2}></a>
                      </div>
                      <h2><a href="#none">${element.title2}</a></h2>
                      <h3><a href="#none">${element.price2}</a></h3>
                    </div>
                  </div>
                  <div class="tabtext">
                    <div class="text32">
                      <div class="src22">
                      <a href="#none"><img src=${element.spanSrc3}></a>
                      </div>
                      <h2><a href="#none">${element.title3}</a></h2>
                      <h3><a href="#none">${element.price3}</a></h3>
                    </div>
                    <div class="text32">
                      <div class="src22">
                      <a href="#none"><img src=${element.spanSrc4}></a>
                      </div>
                      <h2><a href="#none">${element.title4}</a></h2>
                      <h3><a href="#none">${element.price4}</a></h3>
                    </div>
                  </div>
                </div>
              </div>`
});

tabSet3.innerHTML = tablist3;



/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.

대상.이벤트가 일어나는지 안일어나는지 확인하는 함수
*/



//tab-content 내 div 안보이도록

const tabMenu = document.querySelectorAll('.tabMenu a'); //a가 배열로 3개가 있음
const tabContent = document.querySelectorAll('.tabCont > div');       



/*
tabMenu를 클릭하면 할일
모든 tabContent를 보이지 않도록 한다.

속성의 값을 반환
대상.getAttribute('속성명')    // href id class title data-link 

*/

tabMenu.forEach((item,index)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    
    for(let m of tabMenu){  // 탭메뉴안에 있는걸 m으로 받음  
      m.classList.remove('active');  //다뺴고 클릭한 그요소한테만 클래스를 추가한다
    }
    e.target.classList.add('active');

    for(let tc of tabContent){
      tc.classList.remove('active'); // 뭘보고있든 간에 tabContent 0 1 2번째 클래스명 active를 제거한다.
    }
    tabContent[index].classList.add('active');
  })
})




