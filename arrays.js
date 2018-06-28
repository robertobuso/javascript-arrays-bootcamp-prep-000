var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray (array, element) {
  var myFirstArray = [array]
  mySecondArray = [element, ...myFirstArray]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  var myFirstArray = [array]
  myFirstArray = [element, ...myFirstArray]
}