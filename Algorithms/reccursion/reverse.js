function reverse(str) {
    let revStr = "";

    function helper(newStr) {
        revStr += newStr[newStr.length - 1];
        if (newStr.length > 1) {
            helper(newStr.slice(0, -1));
        }
    }
    helper(str);
    return revStr;
}

console.log(reverse("rithmschool"));