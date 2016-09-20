// Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.
// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.

var CarLot = (function () {
  var userInput = document.getElementById("car-update");
  var carDescription = '';
  function editCarDescription (userInput) {
    document.getElementById(carDescription).innerHTML = userInput;
  }

  userInput.addEventListener("keyup", function() {
    editCarDescription(userInput.value);
  });
})(CarLot || {});