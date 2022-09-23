let $counter = document.getElementById('counter');
let $windowWidth = document.getElementById('windowWidth');
let $comments = document.getElementById('comments');

// console.dir(window);

function windowWidth(){
  // console.log(window.outerWidth);
  $windowWidth.innerHTML = window.outerWidth + 'px';
}
function walkerWalks(){
  window.location.href = 'http://walker-walks.com';  
}

// window.document = document
function countUp(){
  let c = $counter.innerHTML;
  c++;
  $counter.innerHTML = c;
}


function addComment(){
  let greet = document.createElement('p');
  let msg = document.createTextNode('Hello');

  $comment.appendChild(greet).appendChild(msg);
}