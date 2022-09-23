// Name.Value collection
let student = {
  name: 'Mike', // Property
  score: 100
}

console.log(student.name);
console.log(student.score);

student = {
  name: 'Mike', // Property
  score: {
    math: 100,
    art: 88,
    programming: 90
  },
  greet: function(){ // Method
    console.log('Welcome, ' + this.name + '!'); // this object
  }
}

console.log(student.score.math); // 100
student.score.math = 90;
console.log(student.score.math); // 90


student.greet();