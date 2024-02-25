
//document.addEventListener('DOMContentLoaded',()=>{
  const btt = document.querySelector('#go-top');
  // btt.classList.add('active');

  window.addEventListener('scroll',()=>{
    
    // let scrollAmt = window.pageYOffset;
    let scrollAmt =window.scrollY;
    // console.log(scrollAmt);
    /*
    스크롤양(scrollAmt)이 300보다크다면
    btt에 클래스명 active추가
    작다면
    btt에서 클래스명 active제거
    */
   if(scrollAmt > 300){
    btt.classList.add('active');
   }
   else{
    btt.classList.remove('active');
   }
  });
  btt.addEventListener('click',(e)=>{
    e.preventDefault();
    // window.scrollTo(0,0);
    window.scrollTo({
      left:0,
      top:0,
      behavior:'smooth' // 작동방식행동
    });

  })
  

  /*
  window.scrollTo(0,100);  //가로,세로
  scrollTo(0,0) 스크롤을 생성
  scrollBy(0,20); 스크롤 생성,
  */
//})