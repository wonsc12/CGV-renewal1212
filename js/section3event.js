const eventbts = document.querySelectorAll(".eventbts li");

eventbts.forEach((item,index)=>{
    item.addEventListener("click",(event)=>{

        event.preventDefault();
        eventbts.forEach((target,index)=>{
            target.classList.remove("on");
        });
        item.classList.add("on");

        let data = item.getAttribute("data-portfolio");  
        console.log(data);
        iso.arrange({
            filter: data,
            transitionDuration:"0.4s"
            });
    });

});

    let elem = document.querySelector('.box12');
    let iso = new Isotope( elem,{
        // options
        itemSelector: '.all',
        layoutMode: 'masonry' // 세로정렬 (빈공간 알아서 정렬 배치) fitRows (가로정렬)
        }); 