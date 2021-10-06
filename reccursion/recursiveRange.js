// this fucntion takes n and adds up all the numbers from 0 to n.
function recursiveRange(n) {
    let sum = 0;

    function helper(number) {
        if (number === 0) {
            return;
        } else if (number > 0) {
            sum += number;
            helper(number - 1);
        }
    }
    helper(n);
    return sum;
}

console.log(recursiveRange(10));