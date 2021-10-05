function countDown(num) {
    if (num <= 0) {
        console.log("all done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(10); // there should be a base case in this canse n <= 0 is th base