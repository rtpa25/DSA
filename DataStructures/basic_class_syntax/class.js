//THIS SYNTAX WILL BE USED TO MAKE THE DATA STRUCTURES

class Student {
  //this stores all the attributes or variables
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.lates = 0;
    this.scores = [];
  }
  //this has all the methods or fucntions
  hello() {
    return `Hello welcome to the school I am ${this.firstName} ${this.lastName}`;
  }
  fuckYou() {
    return `Fuck You I am ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.lates += 1;
    return this.lates;
  }
  addScores(score) {
    this.scores.push(score);
    return this.scores;
  }
  averageScore() {
    let sum = this.scores.reduce((a, b) => {
      a + b;
    });
    return sum / this.scores.length;
  }

  //THESE CAN NOT BE ACCESSED VIA AN INDIVIDUAL INSTANCE THESE ARE GENERALLY HELPER MEHTODS
  static EnrollStudents() {
    return "ENROLLING";
  }
}

const student1 = new Student("Ronit", "Panda", "2nd Year");

console.log(student1.addScores(87));
