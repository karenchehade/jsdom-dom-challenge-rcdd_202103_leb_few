"use strict";
// function _toConsumableArray(a){
//   if(Array.isArray(a)){
//   for(var b=0,c=Array(a.length);b<a.length;b++)
//   c[b]=a[b];
//   return c
// }
// return Array.from(a)}
  const playing=0;
  timer=function(){
    return setInterval(function(){
  const counter=document.getElementById("counter"),
  let countIn=parseInt(counter.innerText);
  counter.innerText=countIn + 1;
},1e3)}
  interval=timer()
  //-------------------------------------
// const i = 1;
// const num = document.getElementById('counter');
//
// function DOMContentLoaded() { "use strict";
//
//   setIntervalfunction () {
//     if (i < 100) {
//       i++;
//       num.innerText = i;
//     }
//   }, 1000);
// }

// let s = 0;
//       const timer = setInterval(function () {
//          const incre=document.getElementById("counter");
//           const temp = parseInt(incre.val());
//           incre.innerHTML = `${temp + 1} `;
//           return 0;
//       }, 1000);
//-----------------------------------------------
const minus=document.getElementById("minus");

minus.addEventListener("click",function(){
  const counter=document.getElementById("counter");
  const tmp=parseInt(counter.innerText);
  counter.innerText=tmp-1;
});

//-----------------------------------------------
const plus=document.getElementById("plus");
plus.addEventListener("click",function(){
  const counter=document.getElementById("counter");
  const tmp=parseInt(counter.innerText);
  counter.innerText=tmp+1;
});

//-----------------------------------------------
const heart=document.getElementById("heart");

heart.addEventListener("click",function(){
  const counter= parseInt(document.getElementById("counter").innerText);
  const likes=document.querySelector(".likes");

  let li = document.createElement('li');
     li.textContent = `${counter}  has been liked`;
     likes.appendChild(li);

})
//-----------------------------------------------

const pause=document.getElementById("pause");

// pause.addEventListener("click",function(){
//   if(timer==0){
//     clearInterval(interval);
//   this.innerText="resume";
//   }
//   else(timer==1){
//     interval=timer();
//     this.innerText="pause";
//   }
// });

//-----------------------------------------------
const commentForm=document.getElementById("comment-form");

commentForm.addEventListener("submit",function(event){
    event.preventDefault();
    const commentsSection = document.querySelector(".comments");
    const commentAdded = document.createElement("p");
    const commentInput = document.getElementById("comment-input");
    commentAdded.innerText=commentInput.value;
    commentsSection.appendChild(commentAdded);
    commentInput.value=" ";
});
