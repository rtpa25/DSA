function validAnagram(w1, w2) {
    if (typeof w1 !== "string" && typeof w2 !== "string") {
        return false;
    }
    if (w1.length != w2.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < w1.length; i++) {
        let element = w1[i];
        if (obj1[element] > 0) {
            obj1[element]++;
        } else {
            obj1[element] = 1;
        }
    }
    console.log(obj1);

    for (let j = 0; j < w2.length; j++) {
        let elemento = w2[j];
        if (obj2[elemento] > 0) {
            obj2[elemento]++;
        } else {
            obj2[elemento] = 1;
        }
    }
    console.log(obj2);
    let tcount = 0;
    for (let item in obj1) {
        if (obj1[item] == obj2[item]) {
            tcount++;
        } else {
            tcount--;
        }
    }

    if (tcount == Object.keys(obj1).length) {
        return true;
    } else {
        return false;
    }
}

console.log(validAnagram("serp", "pers"));