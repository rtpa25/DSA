/** @format */

function sameFrequency(n1: number, n2: number) {
  let n1String = n1.toString();
  let n2String = n2.toString();

  if (n1String.length !== n2String.length) {
    return false;
  }

  let obj1 = convertStringToObj(n1String);
  let obj2 = convertStringToObj(n2String);

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

console.log(sameFrequency(3589578, 5879382));
