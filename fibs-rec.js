/**
 * Returns an array containing the first n numbers of the Fibonacci sequence.
 * @param {number} n - The count of the first numbers in the Fibonacci sequence.
 * @returns {number[]} An array of the first n Fibonacci numbers.
 */
function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // Recursively find the previous sequence and push the next Fibonacchi number onto it
  const prevSeq = fibsRec(n - 1);
  prevSeq.push(prevSeq[n - 2] + prevSeq[n - 3]);

  return prevSeq;
}

console.log(fibsRec(8));
