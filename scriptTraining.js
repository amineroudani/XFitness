"use strict"
// _______________________________________________________________________________________________________________________________________
// TRAINING PAGE

// This function takes care of the slider etc.
let scrollAmount;
var leftBtn = document.querySelector('.left-section');
var rightBtn = document.querySelector('.right-section');
var w = window.innerWidth;
var container = document.getElementById("container");
var slider = document.querySelector(".slider");
var html = document.querySelector("html");

window.addEventListener("load", console.log("TEST"));


leftBtn.addEventListener("click", toExercises);
rightBtn.addEventListener("click", toTraining);
leftBtn.style.color = "#0bb1f4"



// This function is only called when scrolling horizontally (x-direction)
function sliderAnimation() {    
    let x = container.scrollLeft;
    slider.style.left = `${x/2}px`;

    if(x > w/2) {
        rightBtn.style.color = "#0bb1f4";
        leftBtn.style.color = "white";
    }
    else if (x < w/2){
        leftBtn.style.color = "#0bb1f4";
        rightBtn.style.color = "white";
    }

    // else if (x==0 || x==w){
    //     container.style.overflowY = "auto";

    // }
}

function toExercises(){
    sideScroll(container, 'left', 1, w, 10);
}

function toTraining(){
    sideScroll(container, 'right', 1, w, 10);
}

function sideScroll(element,direction,speed,distance,step){
    // If the user if swiping, then decides to click as he is swiping:
    // We get the current scrollLeft.
    if(direction == 'left'){  
        scrollAmount = w - element.scrollLeft;
    }
    else{
        scrollAmount = element.scrollLeft;
    }
    // We hide overflow so they can't swipe and break the code.
    container.style.overflow = "hidden";
    container.style.scrollSnapType = "none";
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            scrollTop(10, 1)
            window.clearInterval(slideTimer);
            container.style.scrollSnapType = "x mandatory";
            container.style.overflow = "auto";

        }
    }, speed);
}

function scrollTop(step, speed){
    // We hide overflow so they can't swipe and break the code.
    // container.style.overflow = "hidden";
    // container.style.scrollSnapType = "none";
    var slideTimer = setInterval(function(){
        html.scrollTop -= step;
        if(html.scrollTop <= step ){
            html.scrollTop -= 1
            if(html.scrollTop == 0){
                window.clearInterval(slideTimer);
                container.style.scrollSnapType = "x mandatory";
                container.style.overflow = "auto";
            }
            

        }
    }, speed);
}



