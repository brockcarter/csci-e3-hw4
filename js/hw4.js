/* hw4.js */

window.onload = function () {
    "use strict";
    // 1.) PASSWORD CHECK
    var pwd1 = document.getElementById("pwd1");
    var pwd2 = document.getElementById("pwd2");

    //users must enter passwords of at least 8 characters
    pwd1.oninput = function() {
        if (pwd1.value.length < 8) {
            document.getElementById("pwd1Hint").style.display = "inline";
        } else{
            document.getElementById("pwd1Hint").style.display = "none";
        }
    }
    //the two fields must match
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
    //character limit minus the characters in bioBox, then placed in innerHTML
    bioBox.oninput = function() {
        charsLeft.innerHTML = 140 - bioBox.value.length;
    }



    // 3.) SELECT FIELDS
    //grab the two selectors
    var firstSelect = document.getElementById("firstSelect");
    var secondSelect = document.getElementById("secondSelect");

    //create arrays that will populate selectors as options
    var make = ["Land Rover", "Toyota"];
    var roverModels = ["Discovery", "Range Rover", "Evoque"];
    var toyotaModels = ["Land Cruiser", "4Runner", "FJ Cruiser"];
    
    //takes in an array and selector to populate options
    function optionMaker(array, selectList) {
        for (var i = 0; i < array.length; i++) {
        //creates an option element, ie <option></option>
        var option = document.createElement("option");
        //fills that option with an array item
        option.value = array[i];
        option.text = array[i];
        //appends that option to the input selector
        selectList.appendChild(option);
        }
    } 
   
    //run so we have options in the first selector immediately on load
    optionMaker(make, firstSelect);

    //when first selector changes, first clean out residual options
    firstSelect.onchange = function(){
        while (secondSelect.childElementCount >= 2) {   
            secondSelect.removeChild(secondSelect.lastChild);
        }
        //then run this to repopulate secondSelector based on what's in firstSelector
        //have to call function, and not declare in here or it creates infinite loop
        secondSelectorFiller();
    }

    //populate secondSelector based on what's in firstSelector
    function secondSelectorFiller() {
        if (firstSelect.value == "Land Rover") {
            optionMaker(roverModels, secondSelect);
        } else {
            optionMaker(toyotaModels, secondSelect);
        }
    }



    // 5.) PHONE # VALIDATION AND FORMATTING
    var phoneNumber = document.getElementById("phone");
    phoneNumber.onblur = function() {
        var inputString = phoneNumber.value;
        //did some googling to learn more about regular expressions.  here we look through the whole string (g for global) and pull 
        //all digits (\d for digits) into an array of the contiguous digits found 
        var processedString = inputString.match(/\d+/g);
        //use join to bring all the strings in the array into a sigle string
        var allNumberString = processedString.join('');
        console.log(allNumberString);
        //check string length
        if (allNumberString.length == 10) {
            document.getElementById("phoneHint").style.display = "none";
            //slice the string of numbers, and add dashes to get into the formatting requested
            var formattedNumber = allNumberString.slice(0,3) + "-" + allNumberString.slice(3,6) + "-" + allNumberString.slice(6,10);
            //set value of phoneNumber element
            phoneNumber.value = formattedNumber;
        } else {
            document.getElementById("phoneHint").style.display = "inline";
        }
    }
    

    // ***EXTRA CREDIT***  6.) VERIFY EMAIL OR PHONE INFO ENTERED BEFORE SUBMIT
    var el = this.document.getElementById("submitBtn");
    el.addEventListener("click",validateForm,false);
    
    function validateForm(evt) {
        if (document.getElementById("phone").value.length == 0 && document.getElementById("email").value.length == 0) {
            document.getElementById("submitHint").style.display = "inline";
            evt.preventDefault();
        } else {
            document.getElementById("submitHint").style.display = "none";
        }
      }    

}