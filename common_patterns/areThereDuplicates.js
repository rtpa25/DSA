function areThereDuplicates() {
    let stringArgs = [];
    for (var i = 0; i < arguments.length; i++) {
        stringArgs.push(arguments[i].toString());
    }
    let obj1 = {};
    for (let i = 0; i < stringArgs.length; i++) {
        if (obj1[stringArgs[i]] > 0) {
            obj1[stringArgs[i]]++;
        } else {
            obj1[stringArgs[i]] = 1;
        }
    }

    for (let key in obj1) {
        if (obj1[key] > 1) {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates("a", "b", "c", "d", "e", "a"));

console.log([1, 2, 3, 4, 5, 6].indexOf(11));