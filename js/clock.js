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