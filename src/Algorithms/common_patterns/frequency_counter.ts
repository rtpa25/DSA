/** @format */

//write a function caled same which accepts two arrays. The fucntion should return true if every value in the array has it's corresponding values squared in the second array. The frequency of the values must be same and the order doesn't matter

const same = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) return false;
  let obj1;
  let obj2;
  //take arr1 and store all the elements in obj1 where key is the element and value is freq
  obj1 = convertStringToObj(arr1.toString());
  //do the same with arr2 and obj2
  obj2 = convertStringToObj(arr2.toString());
  //take obj1 and square all the keys and make another obj3
  const obj3: {
    [key: number]: number;
  } = {};
  for (let key in obj1) {
    const element = Math.pow(parseInt(key), 2);
    if (obj3[element] > 0) obj3[element]++;
    else obj3[element] = 1;
  }
  //then compare obj3 and obj2 is the key and value pairs match up then we return true
  let tcount = 0;
  for (let key in obj3) {
    if (obj3[key] === obj2[key]) tcount++;
    else tcount--;
  }
  if (tcount === Object.keys(obj1).length) return true;
  else return false;
};

console.log(same([1, 2, 3, 4], [16, 1, 9, 4]));
