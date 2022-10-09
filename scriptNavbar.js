"use strict"
// NAV MENU
function stopScroll(){
    var checkBox = document.getElementById("menu-toggle");
    var body = document.querySelector("body");

    if (checkBox.checked == true){
        body.style.overflowY = "hidden";
    } else {
        body.style.overflowY = "auto";
    }
    }
    