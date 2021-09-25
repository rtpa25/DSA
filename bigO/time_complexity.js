function addUpto(n) {
    console.log((n * (n + 1)) / 2); // This has a O(1)
}

// addUpto(1000);

function addUpto1(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    console.log(total); // This function has a O(n)
}

// addUpto1(1000);

function upAndDown(n) {
    console.log("start");
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
    console.log("top");
    for (let j = n; j >= 0; j--) {
        console.log(j);
    }
    console.log("down"); //This function is also O(n)
}

// upAndDown(1000);

function printAllPairs(n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            console.log(`${i} ${j}`); //This function has a O(n^2)
        }
    }
}

// printAllPairs(1000);

function logAtleast5(n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i); //This function has a O(n)
    }
}

// logAtleast5(2000);

function logAtMost5(n) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i); // This function has a O(1)
    }
}

// logAtMost5(1000);