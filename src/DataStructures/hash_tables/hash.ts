/** @format */

//*Must be fast
//*Must be random
//*Must be deterministic
//Make arraylength prime it decreases the number of collisions
function hash(key: string, arrayLength: number) {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }
  return total;
}

console.log(hash('pink', 13));
console.log(hash('cyan', 13));
console.log(hash('blue', 13));
console.log(hash('piaasdasadsaddsadnk', 13));
console.log(hash('oraasdadasdnge', 13));
console.log(hash('bluerhethethege', 13));
