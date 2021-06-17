const animateTop = document.querySelector('.top')
const animateBottom = document.querySelector('.bottom')
const animateAbout = document.querySelector('.about-p')
// const animateRoadmap = document.querySelector('.roadmap')

window.onload = function(){

  animateTop.classList.add('animated', 'fadeInDown')
  animateBottom.classList.add('animated', 'fadeInUp')
  animateAbout.classList.add('animated', 'fadeInUp')
//   animateRoadmap.classList.add('animated', 'fadeInUp')

}


import SweetScroll from 'sweet-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const sweetScroll = new SweetScroll({
//   trigger: '[data-scroll]',       // Selector for trigger (must be a valid css selector)
//   header: '[data-scroll-header]', // Selector or Element for fixed header (Selector of must be a valid css selector)
//   duration: 1000,                 // Specifies animation duration in integer
//   easing: 'easeOutQuint',         // Specifies the pattern of easing
//   offset: 0,                      // Specifies the value to offset the scroll position in pixels
  vertical: false,                 // Enable the vertical scroll
  horizontal: true,              // Enable the horizontal scroll
//   cancellable: true,              // When fired wheel or touchstart events to stop scrolling
//   updateURL: false,               // Update the URL hash on after scroll (true | false | 'push' | 'replace')
//   preventDefault: true,           // Cancels the container element click event
//   stopPropagation: true,          // Prevents further propagation of the container element click event in the bubbling phase

//   // Callbacks
//   before: null,
//   after: null,
//   cancel: null,
//   complete: null,
//   step: null,
});
}, false);


const target = document.querySelector("footer");

const scrollToTopBtn = document.querySelector(".scrollToTopBtn")
const rootElement = document.documentElement

function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollToTopBtn.classList.add("showBtn")
        } else {
            scrollToTopBtn.classList.remove("showBtn")
        }
    });
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop);

let observer = new IntersectionObserver(callback);

observer.observe(target)


const projectItem = document.querySelectorAll('.project-item');

for(var i = 0; i < projectItem.length; i++){
    projectItem[i].addEventListener('focusin', function(){
        if(!projectItem[i].classList == 'project-item:hover'){
        projectItem[i].classList.addClass('project-item:hover')
        } else {
        projectItem[i].classList.remove('project-item:hover')
        }
    }, false)
}