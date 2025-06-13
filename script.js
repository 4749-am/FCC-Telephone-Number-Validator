const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");

checkButton.addEventListener("click", errorMessage);

userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    errorMessage();
  }
});

function errorMessage() {
  if (userInput.value === "") {
    alert("Please provide a phone number")
  }
  return;
};
