"use strict"
//Initializing variables
var h2 = document.querySelectorAll("h2");
var carousel = document.querySelector(".carousel-container");

//Event listeners
document.addEventListener("scroll", func); 

//Shimmering effect
function func(){
    const container = document.querySelector(".container");
    let y = window.pageYOffset 
    let delta0 = y/2 - 100 ;
    let delta1 = y/2 - 300
    let delta2 = y - 1300;

    //Our goals title
    h2[0].style.background =  ` radial-gradient(circle at ${delta0}%, #aadaff 40%, #009DE4 70%, #194BB5 95%)`
    h2[0].style['-webkit-background-clip'] = 'text';

    //Carousel title
    h2[1].style.background = ` radial-gradient(circle at ${delta1}%, #aadaff 10%, #009DE4 30%, #194BB5 95%)`
    h2[1].style['-webkit-background-clip'] = 'text';

    //Get Startede title
    h2[2].style.background = ` radial-gradient(circle at ${delta2}%, #aadaff 40%, #009DE4 70%, #194BB5 95%)`
    h2[2].style['-webkit-background-clip'] = 'text';

    // setTimeout(SectionInterpolator(container1, section1, title1, description1), 10);
    // setTimeout(SectionInterpolator(container2, section2, title2, description2), 10);
    // setTimeout(SectionInterpolator(container3, section3, title3, description3), 10);
 

}

// //Pillars smoooth animations
// var title1 = document.querySelector(".pillar1-title");
// var description1 = document.querySelector(".pillar1-description");
// var section1 = document.querySelector(".pillar1-section");
// var container1 = document.querySelector(".pillar1-container");


// var title2 = document.querySelector(".pillar2-title");
// var description2 = document.querySelector(".pillar2-description");
// var section2 = document.querySelector(".pillar2-section");
// var container2 = document.querySelector(".pillar2-container");


// var title3 = document.querySelector(".pillar3-title");
// var description3 = document.querySelector(".pillar3-description");
// var section3 = document.querySelector(".pillar3-section");
// var container3 = document.querySelector(".pillar3-container");




// function SectionInterpolator(container, section, title, description) {
   

//     let proportion = (window.pageYOffset - container.offsetTop - section.clientHeight)/container.clientHeight;
//     console.log(proportion );

//     if (proportion < 0) {
//         title.style.opacity = "0";
//         description.style.opacity= "0";
//         //  section.style.fontSize = "200px"
//         // section.style.transform = `scale(4)`;
//     }
    
//     else if (proportion < 0.4) {  
//         title.style.opacity = `${proportion * 5}`;
//         title.style.transform = `scale(${(1 - proportion * 2 ) * 10})`;
//         // section.style.fontSize = `${(1-proportion) * 150}px`
//     }

//     else if (proportion < 0.8) {
//         description.style.opacity = `${(proportion- 0.4) * 5}`;
//         description.style.transform = `scale(${(1 - (proportion- 0.4) * 2.3) * 10})`;

//     } 
// }



//     //Carousel smoooooth scorlling
//     let previousStep = 0
//     var intervalHandle = setInterval(function carouselScroll(){
//         var step = 1;
//         if(previousStep == 0){
//             if(carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth - step){
//                 carousel.scrollLeft += step;
//             }
//             else{
//                 carousel.scrollLeft -= step;
//                 previousStep = 1;
//             } 
//         }
//         if(previousStep == 1){
//             if(carousel.scrollLeft > 0 + step){
//                 carousel.scrollLeft -= step;
//             }
//             else{
//                 carousel.scrollLeft += step;
//                 previousStep = 0;
//             }
//         }


//     }, 40);

// // Returns the scroll speed in the carousel
// var checkScrollSpeed = (function(settings){
//     settings = settings || {};

//     var lastPos, newPos, timer, delta, 
//     delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

//     function clear() {
//         lastPos = null;
//         delta = 0;
//     }

//     clear();

//     return function(){
//         newPos = carousel.scrollLeft;
//         if ( lastPos != null ){ // && newPos < maxScroll 
//             delta = newPos -  lastPos;
//         }
//         lastPos = newPos;
//         clearTimeout(timer);
//         timer = setTimeout(clear, delay);
//         return delta;
//     };
// })();

// // Kill automatic scrolling when user scrolls
// carousel.onscroll = function(){
//     if(checkScrollSpeed()>2 ){
//         clearInterval(intervalHandle)
//     }
// };
