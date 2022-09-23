// Array Object = Indexed Value Collection
let arr = [];
let students = ['Mike', 'Bob', 'Walker'];
let scores = [100, 60, 90];

/* Do not do
let student1;
let student2;
let student3;
*/

console.log(students.length);  // 3

console.log(students[0]);  // Mike
console.log(students[1]);  // Bob
console.log(students[2]);  // Walker
console.log(students[3]);  // undefined


for (var i = 0; i < students.length; i++) {
  console.log(students[i] + ': ' + scores[i]);
}

// Ex: Marth, Art, Programming
scores = [
  [100, 88, 90],
  [60, 75, 80],
  [90, 70, 75]
];

console.log(scores[1][1]); // 75


/* ////////
Exercises
////////*/

// Step1
function exerciseOne(){
  for (let i = 0; i < students.length; i++) {
    let scr = '';
    scr += 'Math: ' + scores[i][0] + ' ';
    scr += 'Art: ' + scores[i][1] + ' ';
    scr += 'Programming: ' + scores[i][2];

    console.log(students[i] + ' - ' + scr);
  }
}


// Step2
function exerciseTwo(){
  let subjects = ['Math', 'Art', 'Programming'];
  for (let i in students) {
    let scr = '';
    for (let j in subjects){
      scr += subjects[j] + ': ' + scores[i][j] + ' ';
    }
    console.log(students[i] + ' - ' + scr);
  }
}