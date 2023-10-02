// Get the button with the class "btnlisten"
var btnListenButton = document.querySelector(".btnlisten");
var body = document.body;
var isBlack = false;

// Function to toggle background color
function toggleBackgroundColor() {
  if (isBlack) {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "black";
  }
  isBlack = !isBlack;
}

// Add a click event listener to the button
btnListenButton.addEventListener("click", toggleBackgroundColor);

// Initialize the background color to white
body.style.backgroundColor = "white";
