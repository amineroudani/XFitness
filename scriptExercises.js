"use strict"     

// Initializations
var mobileSize = 800;
var currentSide = "Front";
var frontSVG = document.getElementById("front");
var backSVG = document.getElementById("back");
var img = document.getElementById("background");
var muscles = document.querySelectorAll("polygon");
var btn = document.querySelector("button")
var descriptionBox = document.querySelector(".descriptions-box")
var textContainer = document.querySelector(".text-container");
var txtBox = document.createElement("div");
txtBox.classList.add("muscle-exercises");
textContainer.appendChild(txtBox);

if (window.innerWidth < mobileSize){
    txtBox.innerHTML=
    '<h2>Click around!</h2> <button onclick="hideSideBar();"> </button> '
}
else{
    txtBox.innerHTML=
    '<h2>Hover around!</h2> '
}

// Create maps for the descriptions of the different exercises
var titles = {
    Lats : "Lats",
    Chest : "Chest",
    FrontDelts : "Front Delts",
    RearDelts : "Rear Delts",
    SideDelts : "Side Delts",
    Triceps : "Triceps",
    Biceps : "Biceps",
    Quads : "Quads",
    Hamstrings : "Hamstrings",
    Traps : "Traps",
    Abs : "Abs",
    Obliques : "Obliques",
    Glutes : "Glutes",
    RotatorCuff: "Rotator Cuff",
    Calves : "Calves",
    Forearms : "Forearms"
}

var latin = {
    Lats : "latsimus dorsi",
    Chest : "pectoralis major",
    FrontDelts : "anterior deltoids",
    RearDelts : "posterior deltoids",
    SideDelts : "lateral deltoids",
    Triceps : "triceps brachii",
    Biceps : "biceps brachii",
    Quads : "quadriceps femoris muscle",
    Hamstrings : "semimembranosus, semitendinosus and biceps femoris",
    Traps : "trapezius",
    Abs : "rectus abdominis muscle",
    Obliques : "external oblique muscle",
    Glutes : "gluteal muscles",
    RotatorCuff: "scapulohumeral muscles",
    Calves : "gastrocnemius and soleus",
    Forearms : ""
};



var gymExercises = {
    Traps : "<li>Deadlifts (any)<li/> <li>Shrugs (Dumbbell, barbell, etc.)</li> <li>Close grip rows (any)</li>",
    Lats : "<li>Pullups/Pulldowns</li> <li><Straight Arm Pulldowns (cable or Dumbbell)</li> <li>Narrow Grip Rows and Elbows Tucked (any)</li>",
    RotatorCuff: "<li>Face Pulls</li> <li>Wide Grip Rows (elbows flared approx. 45deg)</li>",
    Chest : "<li>Flat Press <ul> <li>Barbell/Dumbbell Bench Press</li> </ul> </li> <li>Incline Press<ul><li>Barbell/Dumbbell Incline Bench press</li></ul> </li>  <li>Cable Flys (Decline, Straight, Incline)</li> ",
    FrontDelts : "<li>Overhead Press <ul> <li>Seated Dumbbell (or Barbell)</li> <li>Standing Barbell</li> <li>Machine Press</li> </ul> </li>",
    SideDelts : "<li>Lateral Raises</li>",
    RearDelts : "<li>Rear Delt Flies</li> <li>Any row with elbows flared 45deg</li>",
    Triceps : "<li>Barbell Extensions <ul> <li>Close Grip Bench Press</li> <li>Skull Crushers</li> </ul> </li> <li>Standing Cable Extensions (any attachements)</li> <li>Overhead Tricep Extensions (Cable or Dumbbell)</li>",
    Biceps : "<li>Curl <ul> <li>Standing Barbell/Dumbbell/Cable Curl</li> <li>Seated Dumbbell curls</li> </ul> </li> <li>Hammer Dumbbell Curl</li> <li>Seated Incline Dumbbell Curls</li> ",
    Forearms : "<li>Hold heavy shit</li>",
    Abs : "<li>You train abs on every lift by breathing correctly and bracing them</li>",
    Obliques : "",
    Quads : "<li>Squats <ul> <li>Back Squats</li> <li>Front Squats</li> <li>Heel Elevated Dumbbell Squats</li> <li>Sissy Squats</li> </ul> </li> <li>Bulgarian Split Squats (foot closer to hips)</li> <li>Leg Extensions </li> <li>Lunges</li>",
    Hamstrings : " <li>Deadlifts <ul> <li>Romanian Deadlifts</li> <li>Deficit Deadlifts</li>  <li>Straight Leg Deadlifts</li> </ul> </li> <li>Lying/Seated/Standing Leg Curls</li> ",
    Glutes : "<li>Squats (any)</li> <li>Hip Thrusts (bridges)</li> <li>Bulgarian Split Squats (foot farther from hips)</li>",
    Calves : "<li>Standing Calf Extension</li>  <li>Seated Calf Extensions</li>",
}

var caliExercises = {
    Traps : "",
    Lats : "<li>Pullups about Shoulderwidth (any grip)</li> <li>Front pulls</li> ",
    RotatorCuff: "",
    Chest : "<li>Pushups (Incline, Decline, Straight)</li> <li>Dips (Straight or Prarallel Bars)</li>",
    FrontDelts : "<li>Pike Pushups</li> <li>Handstands</li>",
    SideDelts : "",
    RearDelts : "",
    Triceps : "",
    Biceps : "",
    Forearms : "",
    Abs : "",
    Obliques : "",
    Quads : "<li>Reverse Nordic Culrs</li> <li>Pistol Squats</li>",
    Hamstrings : "<li>Nordic Curls</li>",
    Glutes : "",
    Calves : "",
}



function preloadImage(url){
    var img=new Image();
    img.src=url;
}
preloadImage("Muscles/Back/FullBodyUnsaturated.png")


preloadImage("Muscles/Back/MusclesTraps.png")
preloadImage("Muscles/Front/MusclesTraps.png")
preloadImage("Muscles/Back/MusclesLats.png")
preloadImage("Muscles/Front/MusclesLats.png")
preloadImage("Muscles/Back/MusclesRotatorCuff.png")
preloadImage("Muscles/Front/MusclesChest.png")
preloadImage("Muscles/Front/MusclesFrontDelts.png")
preloadImage("Muscles/Front/MusclesSideDelts.png")
preloadImage("Muscles/Back/MusclesSideDelts.png")
preloadImage("Muscles/Back/MusclesRearDelts.png")
preloadImage("Muscles/Back/MusclesTriceps.png")
preloadImage("Muscles/Front/MusclesBiceps.png")
preloadImage("Muscles/Front/MusclesForearms.png")
preloadImage("Muscles/Back/MusclesForearms.png")
preloadImage("Muscles/Front/MusclesAbs.png")
preloadImage("Muscles/Front/MusclesObliques.png")
preloadImage("Muscles/Back/MusclesObliques.png")
preloadImage("Muscles/Back/MusclesQuads.png")
preloadImage("Muscles/Front/MusclesQuads.png")
preloadImage("Muscles/Back/MusclesHamstrings.png")
preloadImage("Muscles/Back/MusclesGlutes.png")
preloadImage("Muscles/Back/MusclesCalves.png")
preloadImage("Muscles/Front/MusclesCalves.png")


// Add the event listeners
for(var i=0; i<muscles.length; i++){
muscles[i].addEventListener("mouseover", saturate);
muscles[i].addEventListener("mouseleave", desaturate);
// let mouseoverEvent = new Event("mouseover");
// let mouseleaveEvent = new Event("mouseleave");
// muscles[i].dispatchEvent(mouseoverEvent, {bubbles: true})
// muscles[i].addEventListener("click", staySaturated);

}
// Trigger all events for SPEED


function hideSideBar(){
descriptionBox.style.width = "0";
txtBox.style.width= "60vw";
descriptionBox.style.marginRight = "0";
txtBox.style.marginRight="0";
txtBox.style.padding = "1rem ";

}

function saturate(event){
// First we saturate the muscle!
var currentClass = event.target.className.baseVal;
img.src = `Muscles/${currentSide}/Muscles${currentClass}.png`;
// Then we insert the textbox with all the exercises

if (window.innerWidth < mobileSize){
    txtBox.innerHTML=
    `<h2>${titles[currentClass]}</h2>
        <h3 class="latin-heading">${latin[currentClass]}</h3> 
    <br> 
    <h4> Gym Exercises: </h4>
    <div class='gym exercise-list'> <ul> ${gymExercises[currentClass]} </ul> </div>
    <h4> Calisthenics Exercies: </h4>
    <div class='cali exercise-list'> <ul> ${caliExercises[currentClass]} </ul> </div>
    <button> </button>
    `;
}
else{
    txtBox.innerHTML=
    `<h2>${titles[currentClass]}</h2>
        <h3 class="latin-heading">${latin[currentClass]}</h3> 
    <br> 
    <h4> Gym Exercises: </h4>
    <div class='gym exercise-list'> <ul> ${gymExercises[currentClass]} </ul> </div>
    <h4> Calisthenics Exercies: </h4>
    <div class='cali exercise-list'> <ul> ${caliExercises[currentClass]} </ul> </div>
    `;
}

setTimeout(slideIn, 5);


}

var textContainer = document.querySelector(".text-container");
function slideIn() {
    if (window.innerWidth < mobileSize){
        descriptionBox.style.width = "60vw";
        txtBox.style.width= "60vw";
        descriptionBox.style.marginRight = "0"            
        txtBox.style.marginRight="0";
        textContainer.style.width = "45vw";
    }
    else{
        descriptionBox.style.width = "40vw";
        txtBox.style.width= "30vw";
        descriptionBox.style.marginRight = "0"            
        txtBox.style.marginRight="5vw";
        textContainer.style.width = "25vw";

    }
}

function desaturate(event){
img.src = `Muscles/${currentSide}/FullBodyUnsaturated.png`;   
if (window.innerWidth > mobileSize){
    txtBox.innerHTML=            
'<h2>Hover around!</h2> '
}
else {
    setTimeout(hideSideBar, 5);
}


}

function rotate(){
console.log("T");
if(currentSide === "Front"){
    currentSide = "Back";
    frontSVG.style.display = "none";
    backSVG.style.display = "block";
    desaturate();
    
}
else{
    currentSide = "Front";
    frontSVG.style.display = "block";
    backSVG.style.display = "none";
    desaturate();

}
}
