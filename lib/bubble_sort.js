

function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

function bubbleSort(array) {
  let swapped = true;
  let len = array.length;

  while(swapped) {
    swapped = false;

    for(let i = 0; i < len; i++){
      if (array[i] > array[i + 1]){
        swap(array, i, i + 1);
        swapped = true ;
      }
    }

  }
  return swapped;
}


// bubbleSort([7, 4, 3, 9, 2, 1 ])





    module.exports = {
      bubbleSort,
      swap
    };

    //  swapped = false
    //  for i := 1 to n - 1 inclusive do
    //
    //     /* if this pair is out of order */
    //     if A[i - 1] > A[i] then
    //
    //       /* swap them and remember something changed */
    //       swap(A[i - 1], A[i])
    //       swapped := true
    //
    //     end if
    //   end for
    // until not swapped
