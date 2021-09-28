function same(arr1, arr2) {
    if (arr1.length == arr2.length) {
        let obj1 = {};
        let obj2 = {};
        for (let i = 0; i < arr1.length; i++) {
            let element = arr1[i];
            element = element * element;
            if (obj1[element] > 0) {
                obj1[element]++;
            } else {
                obj1[element] = 1;
            }
        }

        for (let i = 0; i < arr2.length; i++) {
            const element = arr2[i];
            if (obj2[element] > 0) {
                obj2[element]++;
            } else {
                obj2[element] = 1;
            }
        }
        if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}