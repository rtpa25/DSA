let instructor = {
    firstName: "kelly",
    inInstructor: true,
    favourites: [1, 2, 3],
};

console.log(Object.keys(instructor)); //O(n)
console.log(instructor.hasOwnProperty("firstName")); // O(1)
console.log(Object.entries(instructor)); // O(n)
console.log(Object.values(instructor)); //O(n)