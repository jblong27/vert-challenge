const shuffleArray = array => {
  //loop through array
  for (let i = array.length - 1; i > 0; i--) {
    // get random position from array
    const j = Math.floor(Math.random() * (i + 1));
    // swap the current item with the item in the random position
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const arr = [7, 13, 13, 18, 29, 33];
//call the shuffle function and log the new array to the console
shuffleArray(arr);
console.log(arr);