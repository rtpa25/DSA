function productOfArray(arr) {
    let product = 1;
    // ensure if the array is not empty if it is then return undefined
    if (arr.length === 0) {
        return;
    }
    //reccursive multiplication of product with all the elements in the array
    product * arr[0];
    productOfArray(arr.slice(1));
    // return the product of all the items in the array
    return product;
}

console.log(productOfArray([1, 2, 3]));