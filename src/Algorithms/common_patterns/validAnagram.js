/** @format */

const arrToObj = require('./utilityArrToObJ.JS');

function validAnagram(w1, w2) {
  if (typeof w1 !== 'string' && typeof w2 !== 'string') {
    return false;
  }
  if (w1.length != w2.length) {
    return false;
  }
  let obj1;
  let obj2;
  obj1 = arrToObj([...w1]);
  obj2 = arrToObj([...w2]);
  let tcount = 0;
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) tcount++;
    else tcount--;
  }
  if (tcount === Object.keys(obj1).length) return true;
  else return false;
}

console.log(validAnagram('serp', 'ersp'));
