function findSum(n){
  let ans=0;
  for(let i=0; i<n; i++){
    ans +=i;
  }
  return ans;
}
function findSumTill100(){
  console.log(findSum(100));
}

// function syncSleep(){
//   let a=1;
//   for(let i=0; i<10000000; i++){
//     a++;
//   }
// }

syncSleep();
console.log("hello world");



// const fs=require("fs");

// fs.readFile("a.txt", "utf-8", function(err, data){
//   console.log(data);
// })

// console.log("hi there");