let target = 10;
let num = 10;

if(target < num){
  console.log('num é maior que target.');
}else{
  console.log('num é menor ou igual a target.');
}

// compare(10);

console.log('num=10: ' + compare(10) );


/* ///////////
// Functions
/////////// */

// function compare(num){
//   let target = 10;
//   if(target < num){
//     console.log('num é maior que target.');
//   }else{
//     console.log('num é menor ou igual a target.');
//   }
// }

function compare(num){
  let target = 10;
  if( typeof(num) != 'number'){
    return 'Error: num tem que ser número.';
  }
  if( target === num ){
    return 'num é igual a target';
  }
  if( target < num ){
    return 'num é maior que target';
  }
  return 'num é menor que target';
