function getMyArray() {
  let myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray.push(i);
  }
  return myArray;
}

function doubleArray(arr) {
  // This is where the bug is
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2; 
  }
  return arr;
}

let myArray = getMyArray();
let doubledArray = doubleArray(myArray);
console.log(myArray); // Output: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
console.log(doubledArray); // Output: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]