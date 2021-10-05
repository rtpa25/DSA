function power(n1, n2) {
    let val = 1;
    //check if n2 = 0 and return 1
    if (n2 === 0) {
        return 1;
    }
    // is a pure reccursion that decreases n2 by 1 on every fucntion call on the stack till n2 has reached 0
    else {
        val *= n1 * power(n1, n2 - 1);
    }
    //it has to return n1^n2
    return val;
}

console.log(power(2, 3));