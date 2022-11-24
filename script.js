let flag=0;

let slides=document.querySelectorAll('.slide')

let slideShow=()=>{
  slides[flag].style.display='initial';
  // setTimeout(()=>{
  //   slides[flag].classList.add('anim')
  // })
}
slideShow();
setInterval(()=>{
  for(let y of slides){
      y.style.display='none'
  }
  flag++;
  if(flag>=slides.length){
      flag=0;      
    }
  slideShow();
},3900)


