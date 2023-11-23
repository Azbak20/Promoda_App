(function () {
    "use strict";
// array of the subject names that will be displayed in the cards of the home page
    var subjects =["Compter Science","New Language","Graphic Design","See More"];

// array of the colors that will be displayed in the cards of the home page    
    var color =["#DC2F02","#E85D04","#F48C06","#FAA307"];

// function that will create the div which is the card furthermore takes two parameter to which is the text to be displayed inside the div and the background of the card
    function createDiv(text,color) {

      // Creating the div with class name , text that will be displayed within and the color of the card/div  
      var cardDiv = document.createElement("div");

      cardDiv.className = "card";
      cardDiv.innerText = text;
      cardDiv.style.backgroundColor = color;

      return cardDiv;
    }
// function that will get the DOM to modify the DOM in order to display specific number of divs based on a given input

    function createAndModifyDivs() {
      var card = document.getElementById("card"),
        myDivs = [],
        i = 0,
        numOfDivs = 4;
        

      for (i; i < numOfDivs; i += 1) {
        myDivs.push(createDiv(subjects[i],color[(Math.floor(Math.random() * numOfDivs))]));
        card.appendChild(myDivs[i]);

      }


    }

    createAndModifyDivs();
  }
  )();

//For more on this code look at this website website : https://stackoverflow.com/questions/20308270/create-multiple-divs-with-the-same-class-javascript

