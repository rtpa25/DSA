// takes an arra and returns the product of all the elements in the array.
function productOfArray(arr) {
    let result = 1;

    function helper(helperArr) {
        if (helperArr.length === 0) {
            return;
        } else {
            result *= helperArr[0];
        }
        helper(helperArr.slice(1));
    }
    helper(arr);

    // return the product
    return result;
}

console.log(productOfArray([1, 2, 3, 4, 5]));