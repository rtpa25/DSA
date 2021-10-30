// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    let revStr = "";

    function helper(newStr) {
        revStr += newStr[newStr.length - 1];
        if (newStr.length > 1) {
            helper(newStr.slice(0, -1));
        }
    }
    helper(str);
    if (str === revStr) {
        return true;
    } else {
        return false;
    }
}