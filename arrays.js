var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray (array, element) {
  var myFirstArray = [array]
  mySecondArray = ["foo", ...myFirstArray]
}

addElementToBeginningOfArray (1, "foo")

function destructivelyAddElementToBeginningOfArray (array, element) {
  var myFirstArray = [array]
  myFirstArray = [element, ...myFirstArray]
  return myFirstArray
}