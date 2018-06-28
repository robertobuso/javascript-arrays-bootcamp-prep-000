var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var myFirstArray = array
  mySecondArray = ['foo', ...myFirstArray]
  return mySecondArray
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  var myFirstArray = array
  myFirstArray = [element, ...myFirstArray]
  return myFirstArray
}