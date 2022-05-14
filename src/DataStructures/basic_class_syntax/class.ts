/** @format */

class Student {
  firstName: string;
  lastName: string;
  grade: number;
  tardies: number;
  scores: number[];
  constructor(firstName: string, lastName: string, grade: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.tardies = 0;
    this.scores = [];
  }
  //these are instance methods which basically means every instance of this class will have these methods
  fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  markAbsent(): string {
    this.tardies++;
    return `${this.fullName()} is late ${this.tardies} times`;
  }
  addScore(score: number): string {
    this.scores.push(score);
    return `${this.fullName()} has scores of ${this.scores}`;
  }
  //static methods or class methods are not exposed to the instances and are basically utility functions and does not relate it with a scpecific instance and is rather associated with the calss itself
  static EnrollStudent() {
    return `Enrolling students`;
  }
}
const ronit = new Student('Ronit', 'Panda', 10);

console.log(ronit.firstName);
console.log(ronit.lastName);
console.log(ronit.fullName());
console.log(ronit.markAbsent());
console.log(ronit.addScore(80));
console.log(ronit.addScore(90));

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  //not called on individual instance but called on the the class itself
  static distance(a: Point, b: Point): number {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));
