/**
 * Returns an array containing the first n numbers of the Fibonacci sequence.
 * @param {number} n - The count of the first numbers in the Fibonacci sequence.
 * @returns {number[]} An array of the first n Fibonacci numbers.
 */
function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const fibArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray;
}

console.log(fibs(8));
