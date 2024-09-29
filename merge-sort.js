/**
 * Returns the given array, sorted.
 * @param {number[]} arr - An array of numbers
 * @param {number} low - The low index
 * @param {number} high - The high index
 */
function mergeSort(arr, low, high) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);

    // Recursively merge sort the left half
    mergeSort(arr, low, mid);
    // Recursively merge sort the right half
    mergeSort(arr, mid + 1, high);
    // Merge both halves
    merge(arr, low, mid, high);
  }

  return arr;
}

/**
 * Merge two sorted arrays into a single sorted array.
 * @param {number[]} arr - An array of numbers
 * @param {number} low - The low index
 * @param {number} mid - The middle index
 * @param {number} high - The high index
 */
function merge(arr, low, mid, high) {
  const leftHalf = arr.slice(low, mid + 1);
  const rightHalf = arr.slice(mid + 1, high + 1);
  let i = 0,
    j = 0,
    k = low;

  // Merge both halves in place
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      arr[k] = leftHalf[i];
      i++;
    } else {
      arr[k] = rightHalf[j];
      j++;
    }
    k++;
  }

  // Copy remaining elements of leftHalf, if any
  while (i < leftHalf.length) {
    arr[k] = leftHalf[i];
    i++;
    k++;
  }

  // Copy remaining elements of rightHalf, if any
  while (j < rightHalf.length) {
    arr[k] = rightHalf[j];
    j++;
    k++;
  }
}

const array = [5, 2, 8, 1, 4, 7, 3, 6];

console.log(mergeSort(array, 0, 7));
