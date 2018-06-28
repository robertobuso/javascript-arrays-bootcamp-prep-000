var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  const array = 1
  var myFirstArray = [array]
  mySecondArray = ['foo', ...myFirstArray]
  return mySecondArray
}

addElementToBeginningOfArray (1, 'foo')

function destructivelyAddElementToBeginningOfArray (array, element) {
  var myFirstArray = [array]
  myFirstArray = [element, ...myFirstArray]
  return myFirstArray
}