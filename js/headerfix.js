const mainMenu = document.querySelectorAll('nav > ul > li');
const header = document.querySelector('header');
<<<<<<< HEAD
const initHeight = header.offsetHeight; // 헤더의 초기높이
let tallestHeight = 0; // 높이끼리 비교 제일큰 높이를 찾고 그 높이기가 됨
/*
요소의 높이,너비
대상.offsetHeight, 대상.offsetWidth
*/
for(let mm of mainMenu){
	//서브메뉴의 높이구하기
	let smHeight = mm.querySelector('ul').offsetHeight;	
	/*
	서브메뉴의 높이가 tallestHeight보다 크다면
	tallestHeight는 그 서브메뉴의 높이다.
	*/
	if(smHeight > tallestHeight){
		tallestHeight = smHeight;
	}
	let headerHeight = tallestHeight + initHeight + 0;
	
	// header 높이50 + 아래 여백
=======
const initHeight = header.offsetHeight;
let tallestHeight = 0;

for(let mm of mainMenu){
	//서브메뉴의 높이구하기
	let smHeight = mm.querySelector('ul').offsetHeight;	

	if(smHeight > tallestHeight){
		tallestHeight = smHeight;
	}
	let headerHeight = tallestHeight + initHeight + 50;
>>>>>>> 43dcbebcfd811c8c53db646ea931ea4a901317c1
	
	mm.addEventListener('mouseover',()=>{
		header.style.height = `${headerHeight}px`;
	});
	mm.addEventListener('mouseout',()=>{
		header.style.height = `${initHeight}px`;
	});	
}