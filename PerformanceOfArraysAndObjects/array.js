let names = ["Mei", "meli", "Andrea", "Sam"];

console.log(names[1]); //o(1)
names.push("mia"); //o(1)
console.log(names);
names.pop(); //o(1)
console.log(names); //o(1)

// If we want to insert into a certain place in an array then that operatiuon is O(n)
// Same applies with deletion of elements from any other place other than the end
// Because theses operations involve re-indexing of all the elements after the operated element
names.splice(2, 0, "kalle"); //O(n)
console.log(names);

names.shift();
console.log(names.shift());

console.log(names.indexOf("kalle")); // O(n)