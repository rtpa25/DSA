/** @format */

class HashTable {
  keyMap: string[][][];
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  //retursn a number which is less than the keymap array length which is that hash of the key that the user wants to set
  _hash(key: string) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key: string, value: string) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, value]);
  }
  get(key: string) {
    let idx = this._hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        const element = this.keyMap[idx][i];
        if (element[0] === key) {
          return element[1];
        }
      }
    }
    return undefined;
  }
  //returns all the unique values
  values() {
    let valArr: string[] = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valArr.includes(this.keyMap[i][j][1])) {
            valArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valArr;
  }
  keys() {
    let keyArr: string[] = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArr.includes(this.keyMap[i][j][0])) {
            keyArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keyArr;
  }
}

const map = new HashTable();
map.set('pink', 'PINK');
map.set('cyan', 'CYAN');
map.set('blue', 'BLUE');
map.set('green', 'GREEN');
map.set('red', 'RED');
map.set('yellow', 'YELLOW');
map.set('orange', 'ORANGE');
map.set('purple', 'PURPLE');
map.set('black', 'BLACK');
map.set('purple1', 'PURPLE');

console.log(map.values());
console.log(map.keys());
