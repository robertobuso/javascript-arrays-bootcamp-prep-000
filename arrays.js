var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var myFirstArray = array
  mySecondArray = ['foo', ...myFirstArray]
  return mySecondArray
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  var myFirstArray = [array]
  myFirstArray = ['foo', ...myFirstArray]
  return myFirstArray
}

function addElementToEndOfArray (array, element) {
  var myFirstArray = array
  mySecondArray = [...myFirstArray, 'foo']
  return mySecondArray
}

function destructivelyAddElementToEndOfArray (array, element) {
  var myFirstArray = array
  myFirstArray = [...myFirstArray, element]
  return myFirstArray
}