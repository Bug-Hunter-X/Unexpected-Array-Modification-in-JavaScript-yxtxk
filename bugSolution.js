function getMyArray() {
  let myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray.push(i);
  }
  return myArray;
}

function doubleArray(arr) {
  // Create a copy of the array to avoid modifying the original
  let doubledArr = [...arr]; //This creates a shallow copy 
  for (let i = 0; i < doubledArr.length; i++) {
    doubledArr[i] *= 2; 
  }
  return doubledArr;
}

let myArray = getMyArray();
let doubledArray = doubleArray(myArray);
console.log(myArray); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(doubledArray); // Output: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]