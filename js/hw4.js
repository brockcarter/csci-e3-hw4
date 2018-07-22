/* hw4.js */

window.onload = function () {
    "use strict";
    // 1.) PASSWORD CHECK
    var pwd1 = document.getElementById("pwd1");
    var pwd2 = document.getElementById("pwd2");

    //Users must enter passwords of at least 8 characters
    pwd1.oninput = function() {
        if (pwd1.value.length < 8) {
            document.getElementById("pwd1Hint").style.display = "inline";
        } else{
            document.getElementById("pwd1Hint").style.display = "none";
        }
    }
    //The two fields must match
    pwd2.oninput = function () {
        if (pwd1.value != pwd2.value) {
            document.getElementById("pwd2Hint").style.display = "inline";
        } else {
            document.getElementById("pwd2Hint").style.display = "none";
        }
    }
    
    // 2.) BIO WORD COUNT
    var bioBox = document.getElementById("bio");
    var charsLeft = document.getElementById("charsLeft");

    bioBox.oninput = function() {
        charsLeft.innerHTML = 140 - bioBox.value.length;
    }
}