// Let's start by decalaring all the variables that will be used

// No. of squares that will be used in hard mode
var numSquare = 6;

// select the easy button
var easy = document.querySelector("#easy");

// select the hard button
var hard = document.querySelector("#hard");

// Select the reset Button i.e New colors
var resetButton = document.querySelector("#reset");

// Select the first block
var h1 = document.querySelector("h1");

/* Decalare a variable color "generateRandomColors"
 is a function that will be created later. The function
 generates random rgb color, the argument takes the number 
 of colors to be generated at once. Since our numSquare is 6,
 six RGB colors will be generated once..
 Try running for console.log(colors) at this place to see 
 what will be genrated. e.g of what will be generated is
      (6) ["rgb(36, 56, 107)", "rgb(186, 123, 42)", "rgb(233, 22, 254)",
       "rgb(76, 121, 45)", "rgb(134, 178, 101)", "rgb(49, 177, 169)"]*/
var colors = generateRandomColors(numSquare);

// select the message to be displayed 
var messageDisplay = document.querySelector("#message");

/* pickColor is a function. it generates only one RGB at once.And that is
the correct color*/
var pickedColor = pickColor();

// select the color display in the first, that is  the color that will be guessed
var colorDisplay = document.getElementById("colorDisplay");

// setting the color display to be the picked color
colorDisplay.textContent = pickedColor;

// select all squares
var squares =document.querySelectorAll(".square");


// NOW! let's start working

// What will happen when the easy button is clicked?
easy.addEventListener("click", function () {
    // First remove the class selected from button hard
    hard.classList.remove("selected");
    // then add the class to easy button
    easy.classList.add("selected");
    // then set the number of squares to be three, which were previously 6
    numSquare = 3;
    // then generate 3 random colors at once 
    colors = generateRandomColors(numSquare);
    // then set the picked color
    pickedColor = pickColor();
    // set the color display to be the picked color
    colorDisplay.textContent = pickedColor;
    // loop through the squares
    /* for every square, set the background to be the color */
    for (var i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.backgroundColor = colors[i];
        // else set then display to be none
        // This will first set the three squares and set the rest to display none
      } else {
        squares[i].style.display = "none";
      }
    }
    h1.style.backgroundColor = "steelblue";
  });

//   What will happen when the hard button is clicked?
hard.addEventListener("click", function(){
    /*Same as the easy button, just some little changes */
    hard.classList.add("selected")
    easy.classList.remove("selected")
    numSquare = 6
    colors = generateRandomColors(numSquare)
       pickedColor = pickColor()
       colorDisplay.textContent = pickedColor
       for(var i = 0; i < squares.length; i++){
               squares[i].style.backgroundColor  = colors[i]
            //    set the rest of the squares to diplay block
           squares[i].style.display = "block"
       }
       h1.style.backgroundColor = "steelblue"
    })


    // What will then happen when the  resetButton(new colors) is clicked
      
resetButton.addEventListener("click", function () {
    // reset the colors
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    // clean the message display to be empty
    messageDisplay.textContent = "";
  
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
  });

  
//   Now what about when a square is clicked?
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        // when a square is clicked...
      var clickedColor = this.style.backgroundColor;
      //   if it is the correct on,
      if (clickedColor == pickedColor) {
        /*  changeColors is a function that chenge
           the colors of all square to be same. So if it is correct, 
           all the squares should have the color of the clicked one  */
        changeColors(clickedColor);
        // and the message should display "correct"
        messageDisplay.textContent = "Correct!";
        // the first block should have the background of the clicked color too
        h1.style.backgroundColor = clickedColor;
        // And the reset button should ask "New game?"
        resetButton.textContent = "New game?";
      } else {
        //   else...
        /* the clicked square should have "#232323" color as the background.
        that is the color of the whole background */
        this.style.backgroundColor = "#232323";
        // And the message should show Try again
        messageDisplay.textContent = "Try again";
      }
    });
  }
  

//   NOW THESE ARE THE FUNCTIONS!!

// The changeColors function that will change all the squares color to be same
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = color;
    }
  }
//   pickColor function that return one color which will be the correct one
  function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }
//   generateRandomColors which will generate (num) numbers of colors and push them into arr
  function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(randomColor());
    }
    return arr;
  }
//   randomColor which generates random rgb
  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }