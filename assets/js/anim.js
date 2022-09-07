const IntroSectionWrapper = document.querySelector('.Intro-section-wrapper')
const testimonialSectionWrapper = document.querySelector('.testimonial-section-wrapper');
const contactSectionWrapper = document.querySelector('.contact-section-wrapper')

const MainWrapperAnim = ({selector,classes}) =>{
  let options = {
    root: document.querySelector('#scrollArea'),
    threshold: 0.1,
    rootMargin:'0px 0px 100px 0px'
  }
  
  let observer = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      selector.classList.remove(`${classes}`);
      observer.disconnect();
    })
  }, options);
  observer.observe(selector);
};

let IntroObj = {
  selector:IntroSectionWrapper,
  classes:'translateY'
}
let TestimonialObj = {
  selector:testimonialSectionWrapper,
  classes:'translateY'
}
let contactObj = {
  selector:contactSectionWrapper,
  classes:'translateY'
}
MainWrapperAnim(IntroObj);
MainWrapperAnim(TestimonialObj);
MainWrapperAnim(contactObj);


