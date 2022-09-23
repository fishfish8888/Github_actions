/*// 
Often used to protect your variable form other programs.
//*/

// let say = function(str){
//   let msg;
//   msg = str;
//   console.log(msg);
// };

(function(str){
  let msg;
  msg = str;
  console.log(msg);
}('hello'));

console.log(msg);


/* /////
Functions
//////*/
// function say(str){
//   let msg;
//   msg = str;
//   console.log(msg);
// }