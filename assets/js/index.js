const herobannerSlide = document.querySelectorAll('.herobanner-slide');
const herobannerLeftArrow = document.querySelector('.left-arrow');
const herobannerRightArrow = document.querySelector('.right-arrow');
const testimonialSlides = document.querySelectorAll('.testimonial-slide')

const testimonialLeftArrow = document.querySelector('.testinomial-left-arrow');
const testimonialRightArrow = document.querySelector('.testinomial-right-arrow')

const  menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileNav = document.querySelector('.mobile-nav')

let herobannerCounter=0;
let testimonialCounter=0;

const setImagePosition = (Slides) =>{
  Slides.forEach((img,index) => {
    img.style.left=`${index*100}%`;
  });
}

const handleAutoHeroSlide = () =>{
  if(herobannerCounter===herobannerSlide.length-1) herobannerCounter=-1;
  herobannerCounter++
  herobannerSlide.forEach((img) => {
    img.style.transform=`translateX(-${herobannerCounter*100}%)`;
  });
}


const handleAutoTestimonailSlide = () =>{
  if(testimonialCounter===testimonialSlides.length-1) testimonialCounter=-1;
  testimonialCounter++
  testimonialSlides.forEach((img) => {
    img.style.transform=`translateX(-${testimonialCounter*100}%)`;
  });
}

herobannerLeftArrow.addEventListener('click',()=>{
   if(herobannerCounter===0) return;
   herobannerCounter--;
   herobannerSlide.forEach((img) => {
    img.style.transform=`translateX(-${herobannerCounter*100}%)`;
  });
});


herobannerRightArrow.addEventListener('click',()=>{
  if(herobannerCounter===herobannerSlide.length-1) return;
  herobannerCounter++;
  herobannerSlide.forEach((img) => {
   img.style.transform=`translateX(-${herobannerCounter*100}%)`;
 });
});

// testimonialLeftArrow.addEventListener('click',()=>{
//   if(testimonialCounter===0) return;
//   testimonialCounter--;
//   testimonialSlides.forEach((img) => {
//    img.style.transform=`translateX(-${testimonialCounter*100}%)`;
//  });
// });

// testimonialRightArrow.addEventListener('click',()=>{
//   if(testimonialCounter===testimonialSlides.length-1) return;
//   testimonialCounter++;
//   testimonialSlides.forEach((img) => {
//    img.style.transform=`translateX(-${testimonialCounter*100}%)`;
//  });
// });


menuIcon.addEventListener('click',()=>{
  mobileNav.classList.add('show-mobile-nav');
    closeIcon.style.display='block';
    menuIcon.style.display='none';
});

closeIcon.addEventListener('click',()=>{
  mobileNav.classList.remove('show-mobile-nav');
  closeIcon.style.display='none';
  menuIcon.style.display='block';
});

window.onload= () =>{
  setImagePosition(herobannerSlide);
  // setImagePosition(testimonialSlides)
  setInterval(()=>{
    handleAutoHeroSlide()
  },5000);
  setInterval(()=>{
    // handleAutoTestimonailSlide()
  },7000)
}
