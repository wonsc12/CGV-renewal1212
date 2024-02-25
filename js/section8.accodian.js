// 클릭할 모바일 1댑스 메뉴들
let questionm = document.querySelectorAll(".questionm > li"); // console.log(mGnb); 갯수를 확인한다.
// 2랩스 ul태그 높이값 각각 배열로 세팅
console.log(questionm);

let mDepthq_height = [50,250,50,150];




for(let i=0; i < questionm.length; i++){
  questionm[i].addEventListener("click",()=>{  //해당하는 1댑스 메뉴를 클릭하면
        
        if(questionm[i].classList.contains("on")){ //클릭한 li태그 1댑스에 클래스 on이 있다면
        //접혀져 있는 메뉴를 눌러야함

        questionm[i].querySelector(".mDepthq").style.height = "0px";
        questionm[i].classList.remove("on");
        }
        else{
            //기존에 활성화 된 메뉴들 및 서브메뉴들 일괄적으로 다 비활성화!
            let onmGnb2 = document.querySelectorAll(".questionm > li.on");
            for(let j = 0 ; j < onmGnb2.length; j++){
                onmGnb2[j].querySelector(".mDepthq").style.height = "0px";
                onmGnb2[j].classList.remove("on");
            }

           //클릭한 1댑스 활성화 및 해당 서브메뉴만 등장    클래스 on이 안붙여진곳
           questionm[i].querySelector(".mDepthq").style.height = mDepthq_height[i] + "px";
           questionm[i].classList.add("on")
        }    
    });
}