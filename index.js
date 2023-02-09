//my first js code!


let count=0;
let counterEl=document.getElementById("counter");
let saveEl=document.getElementById("save-el");
function increment(){

   count=count+1;
   console.log(count);
   //document.getElementById("counter").innerText=count;
   counterEl.innerText=count;
}

function save(){
    //let countSr=" "+count+ " - ";
    //saveEl.innerText+=countSr;

    let countSr=count+" - ";
    saveEl.textContent+=countSr;

    count=0;
    counterEl.textContent=0;
    console.log(count);
}