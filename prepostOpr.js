let i = 1;

//console.log(i++); //1

// console.log(++i); //2

setTimeout(() => {
  console.log("time" + i); //2
});

console.log(++i);//2
////////////////////////////////////////////////

let i = 1;

setTimeout(() => {
  console.log("time" + i); //1
});

console.log(--i); //0

console.log(i++); //0
