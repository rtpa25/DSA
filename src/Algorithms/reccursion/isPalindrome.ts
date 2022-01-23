/** @format */

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

//*iterative approach
function isPalindrome(word: string): boolean {
  const wordArr = word.split('');
  let revWord = '';
  for (let i = wordArr.length - 1; i > -1; i--) {
    revWord += wordArr[i];
  }
  if (revWord === word) return true;
  else return false;
}

// console.log(isPalindrome('tacocat'));

//*reccursive approach
function isPalindromeReccursive(word: string) {
  function helper(wordToReverse: string): string {
    if (wordToReverse.length === 1) return wordToReverse;
    return wordToReverse.slice(-1) + helper(wordToReverse.slice(0, -1));
  }
  const revWordFromHelper = helper(word);
  console.log(revWordFromHelper);

  if (revWordFromHelper === word) return true;
  else return false;
}

console.log(isPalindromeReccursive('tacocat'));
