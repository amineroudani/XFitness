"use strict"
//Auto-scrolling to sections 
document.querySelectorAll(".section-title").forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// This function is necessary to adjust the height of the boxes 
// according to the text in them.
function test(k){
    console.log("T");
    var icon = document.querySelector(`.i${k}`)
    var checkbox = document.getElementById(`checkbox${k}`);
    var answerContainer = document.querySelector(`.a${k}-container`);
    var h = document.querySelector(`.a${k}`).clientHeight
    

    //Set some styles
    checkbox.style.display = "none";
    


    if (checkbox.checked ===true){
        icon.style.transform = "rotate(225deg)";
        icon.style.transition = "0.3s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.05s";
        answerContainer.style.height = `${h}px`

    }
    else{
        answerContainer.style.height = "0px"
        icon.style.transform = "rotate(45deg)";



    }
}

// Initialize all the FAQ boxes
var faqCount = document.querySelectorAll(".checkbox-container").length
for(var i=1; i<faqCount + 1; i++) {
    test(i);
}

