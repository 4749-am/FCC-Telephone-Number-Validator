const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");

checkButton.addEventListener("click", function() {
  errorMessage();
  isUSPhoneNumber();
});

clearButton.addEventListener("click", reset);

function reset() {
    userInput.value = "";
    result.innerText = "";
}

userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    errorMessage();
  }
});

function errorMessage() {
  if (userInput.value === "") {
    alert("Please provide a phone number");
    return true;
  }
  return false;
};

function isUSPhoneNumber() {
  if(/^\\(:([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/.test(userInput.value)) {
    result.innerText = `Valid US number: ${userInput.value}`
  }
  else {
    result.innerText = `Invalid US number: ${userInput.value}`
  }
  return;
}
