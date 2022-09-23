// var
const c = 3;
// c = 'abc';

function varTest(){
  var x = 0;
  console.log(x);

  if(true){
    var x = 1;
    console.log(x); // 1
  }

  // var x = 2;
  console.log(x); // 1
}


// let

function letTest(){
  let y = 0;
  console.log(y);

  if(true){
    let y = 1;
    console.log(y); // 1
  }

  // let y = 2;
  console.log(y); // 0
}
