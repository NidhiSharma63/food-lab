const herobannerSlide = document.querySelectorAll('.herobanner-slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const  menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileNav = document.querySelector('.mobile-nav')

let counter=0;

herobannerSlide.forEach((img,index) => {
  img.style.left=`${index*100}%`;
});

// console.log(leftArrow)
leftArrow.addEventListener('click',()=>{
   if(counter===0) return;
   counter--;
   herobannerSlide.forEach((img) => {
    img.style.transform=`translateX(-${counter*100}%)`;
  });
});
rightArrow.addEventListener('click',()=>{
  console.log(counter)

  if(counter===herobannerSlide.length-1) return;
  counter++;
  herobannerSlide.forEach((img) => {
   img.style.transform=`translateX(-${counter*100}%)`;
 });
});

// mobile nav listeners

menuIcon.addEventListener('click',()=>{
  mobileNav.style.transform='translateX(0%)'
});

closeIcon.addEventListener('click',()=>{
  mobileNav.style.transform='translateX(100%)'
});