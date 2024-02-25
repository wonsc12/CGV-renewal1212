//section 1 첫번째 슬라이드 시간

let years,months,dates,days,hours,minutes,sec;

let dayList = [ "일","월","화","수","목","금","토"];

let twohours;

let twomin;

let twosec;

setInterval(function(){

    let testDate = new Date()

    years = testDate.getFullYear();

    months = testDate.getMonth() +1 ;

    dates = testDate.getDate();

    days = testDate.getDay();

    hours = testDate.getHours();

    minutes = testDate.getMinutes();

    sec = testDate.getSeconds();

    if(hours >=0){

        twohours = hours;
    }
    else{

        twohours = "0" + hours;
    }

    if(minutes >= 10){

        twomin = minutes;
    }
    else{
        twomin = "0" + minutes;
    }
    if(sec >=10 ){

        twosec = sec;
    }
    else {

        twosec = "0" +sec;
    }
    // document.querySelector(".year").innerHTML = years + "년";
    document.querySelector(".month").innerHTML = months + "월";
    document.querySelector(".date").innerHTML = dates + "일";
    // document.querySelector(".day").innerHTML = dayList[days] + "요일";
    document.querySelector(".hours").innerHTML = twohours + "시";
    document.querySelector(".minutes").innerHTML = twomin + "분";
    document.querySelector(".seconds").innerHTML = twosec + "초";

},1000)



// section1 슬라이드 2번째 시간

let years2,months2,dates2,days2,hours2,minutes2,sec2;

let dayList2 = [ "일","월","화","수","목","금","토"];

let twohours2;

let twomin2;

let twosec2;

setInterval(function(){

    let testDate2 = new Date()

    years2 = testDate2.getFullYear();

    months2 = testDate2.getMonth() +1 ;

    dates2 = testDate2.getDate();

    days2 = testDate2.getDay();

    hours2 = testDate2.getHours();

    minutes2 = testDate2.getMinutes();

    sec2 = testDate2.getSeconds();

    if(hours2 >=0){

        twohours2 = hours2;
    }
    else{

        twohours2 = "0" + hours2;
    }

    if(minutes2 >= 10){

        twomin2 = minutes2;
    }
    else{
        twomin2 = "0" + minutes2;
    }
    if(sec2 >=10 ){

        twosec2 = sec;
    }
    else {

        twosec2 = "0" +sec2;
    }
    // document.querySelector(".year").innerHTML = years + "년";
    document.querySelector(".month2").innerHTML = months + "월";
    document.querySelector(".date2").innerHTML = dates + "일";
    // document.querySelector(".day").innerHTML = dayList[days] + "요일";
    document.querySelector(".hours2").innerHTML = twohours + "시";
    document.querySelector(".minutes2").innerHTML = twomin + "분";
    document.querySelector(".seconds2").innerHTML = twosec + "초";

},1000)


// 카운트 다운 


function countDownInit(setTime,viewParent,viewChild){ //setTime"2022-12-12 00:00:00",viewParent".timer",viewChild".countview"

  let countDown = setInterval(function(){
      //시간관련 객체 생성
      let test = new Date(); //시간관련 명령어들은 뉴데이터로 만들고  그걸 복제해서 test에 담아줌
      // console.log("현재시간" + test.getTime()); //date 현재 몃일인지 숫자값으로 환산 day
                                               //현재 시간이 바뀌고 있기 때문에 계속 바뀜
      //9월1일의 시간을 밀리세컨드로 보여줌
      let test2 = new Date(setTime); //"2022-09-02 00:00:00"
      // console.log("9월1일" + test2.getTime());  //시간 고정
  
      //현재시간 밀리세컨드 변수에 담음
      let today = test.getTime();

      //9월1일 시간 밀리세컨드 변수에 담음
      let lastDay = test2.getTime();

      //9월 1일 시간에서 현재 시간을 빼면 남은 시간이 나온다.

      let resultDay = lastDay - today;  //남은시간
      
      // console.log("남은시간 밀리세컨드" + resultDay);
      
      //일 , 시 , 분 , 초를 표현하는 계산식
      
      const seconds = 1000 // 1초 1000
      const minutes = seconds * 60 // 60초(1분) 1000 * 60
      const hours = minutes * 60 // 60분(1시간) 1000 * 60 * 60
      const days = hours * 24 // 24시간(1일) 1000 * 60 * 60 * 24  86,400,000
      
      //남은 일 계산 -> resultDay / days -> 몃일 남았는지 

      let cdays = Math.floor(resultDay / days);      //숫자가 중간에 바뀌는건 let 바뀌지 않는건 const
      // console.log(cdays + "일");
      //남은 시 계산 ->resultDay % days / hours
      let chours = Math.floor((resultDay % days) / hours );
      // console.log(chours + "시간");
      //남은 분 계산 
      let cminutes = Math.floor((resultDay % hours) / minutes); 
      // console.log(cminutes+ "분");
      //남은 초 계산
      let cseconds = Math.floor((resultDay % minutes) / seconds);
      // console.log(cseconds+ "초");

      //일 , 시 , 분 ,초가 두자리 수인지 한자리 수인지 확인해서 한자라면 앞에 0붙여준다.
     
     //일 ,시 , 분 초 환산작업끝낸 데이터값을 timeSet 배열에 담아준다.
      let timeSet = [cdays,chours,cminutes,cseconds];
      const timerTag = document.querySelectorAll(viewParent); //".timer"글자표현될 부모태그 선택 div태그4마리
     //반복문으로 아래에 있는 조건문 if else 총 4번 실행할수 있도록 리펙토링 
     for(let i = 0 ; i < timeSet.length; i++){
          if(timeSet[i] < 10){ //숫자가 한자리 일때
              // console.log("0"+timeSet[i]);
              timerTag[i].querySelector(viewChild).innerHTML = "0" + timeSet[i];  //".countView" //쿼리 셀릭터 부모안에잇는 자식들 선택
          }
          else{ //숫자가 두자리 일때
              // console.log(timeSet[i]);
              timerTag[i].querySelector(viewChild).innerHTML = timeSet[i];   //".countView"
          }
     }

     //남은 시간이  0보다 작다면 (시간이 만료 됬다면)
     if(resultDay < 0 ){  
          clearInterval(countDown); //자동실행함수 담고 있는 변수 이름으로 멈춰줌
          // 일 ,시 , 분 , 초가 00 00 00 00 으로 강제 변환
          for( let i = 0 ; i < timerTag.length;i++){  //timeSet.length; i++ 이거도 가능
              timerTag[i].querySelector(viewChild).innerHTML = "00"; //".countView"


          }
          // document.querySelector(".buy").style.display = "none";
          
          //태그삭제(코드상에서 제거됨)
          document.querySelector(".buy").remove();               //태그삭제
      }    

      
     //반복문으로 축소
      // if(cdays < 10){
      //     console.log("0"+cdays);
      // }
      // else{
      //     console.log( cdays);
      // }
      // if(chours < 10){
      //     console.log("0"+chours);
      // }
      // else{
      //     console.log( chours);
      // }
      // if(cminutes < 10){
      //     console.log("0"+cminutes);
      // }
      // else{
      //     console.log( cminutes);
      // }
      // if(cseconds < 10){
      //     console.log("0"+cseconds);
      // }
      // else{
      //     console.log( cseconds);
      // }

  },1000);

}
