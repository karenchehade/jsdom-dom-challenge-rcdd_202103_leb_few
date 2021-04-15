// function timer(){
//     var incre=document.getElementById("counter");
//     b=parseInt(incre.innerText);
//     incre.innerText=b+1
//   }
// let s = 0;
//       const timer = setInterval(function () {
//          const incre=document.getElementById("counter");
//           const temp = parseInt(incre.val());
//           incre.innerHTML = `${temp + 1} `;
//           return 0;
//       }, 360);
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

commentForm.addEventListener("submit",function(){
    const commentsSection = document.querySelector(".comments");
    const commentAdded = document.createElement("p");
    const commentInput = document.getElementById("comment-input").value;
    console.log(commentInput);
    commentAdded.innerText=commentInput;
    commentsSection.appendChild(commentAdded);
//commentInput.value=" ";
});
