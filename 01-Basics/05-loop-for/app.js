function whileLoop(){
  let i = 0; // incremention
  while(i < 11){
    if( i === 5 ){
      i++;
      continue;
    }
    console.log(i);
    i++; // i = i + 1;
  }
}

function forLoop(){
  for(let i = 0; i < 11; i++){
    if( i === 5 ){
      continue;
    }
    console.log(i);
  }
