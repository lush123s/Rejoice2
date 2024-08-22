let cursor = document.querySelector('.cursur');
let cursor2 = document.querySelector('.cursur2');

let page1 = document.querySelector('.page1');
let page4 = document.querySelector('.page4')
function cursorEffect(){


    page1.addEventListener('mousemove',function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
        
    })
    
    page1.addEventListener('mouseleave',function(){
        gsap.to(cursor,{
            opacity:0
        })
    })
    page1.addEventListener('mouseenter',function(){
        gsap.to(cursor,{
            opacity:1
        })
    })
}
function cursorEffect2(){

    page4.addEventListener('mousemove',function(dets){
      cursor2.style.left = dets.x +'px';
      cursor2.style.top = dets.y +'px'
    })
}
cursorEffect()
cursorEffect2()


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
  });

let loader  =document.querySelector('.loader');

setTimeout(function(){
  loader.style.display = 'none';
},2000)
