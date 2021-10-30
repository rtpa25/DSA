function sameFrequency(n1, n2) {
    let n1String = n1.toString();
    let n2String = n2.toString();

    if (n1String.length !== n2String.length) {
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < n1String.length; i++) {
        if (obj1[n1String[i]] > 0) {
            obj1[n1String[i]]++;
        } else {
            obj1[n1String[i]] = 1;
        }
    }
    for (let j = 0; j < n2String.length; j++) {
        if (obj2[n2String[j]] > 0) {
            obj2[n2String[j]]++;
        } else {
            obj2[n2String[j]] = 1;
        }
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    } else {
        for (const key in obj1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    }
}

console.log(sameFrequency(3589578, 5879385));