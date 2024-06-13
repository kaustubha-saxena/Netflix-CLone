

let btn1=document.body.querySelector(".faq").children[1].children[1];
let btn2=document.body.querySelector(".faq").children[3].children[1];
let btn3=document.body.querySelector(".faq").children[5].children[1];
let btn4=document.body.querySelector(".faq").children[7].children[1];
let btn5=document.body.querySelector(".faq").children[9].children[1];
let btn6=document.body.querySelector(".faq").children[11].children[1];


btn1.addEventListener("click" , ()=>{
     
     btn1.classList.toggle("transform-icon");
     document.body.querySelector(".faq").children[2].classList.toggle("hid");
}
)
btn2.addEventListener("click" , ()=>{
    btn2.classList.toggle("transform-icon");
     document.body.querySelector(".faq").children[4].classList.toggle("hid");
    console.log("clicked")}
)
btn3.addEventListener("click" , ()=>{
    btn3.classList.toggle("transform-icon");
     document.body.querySelector(".faq").children[6].classList.toggle("hid");
    console.log("clicked")}
)
btn4.addEventListener("click" , ()=>{
    btn4.classList.toggle("transform-icon");
     document.body.querySelector(".faq").children[8].classList.toggle("hid");
    console.log("clicked")}
)
btn5.addEventListener("click" , ()=>{
    btn5.classList.toggle("transform-icon");
     document.body.querySelector(".faq").children[10].classList.toggle("hid");
    console.log("clicked")}
)
btn6.addEventListener("click" , ()=>{
    btn6.classList.toggle("transform-icon");
     document.body.querySelector(".faq").children[12].classList.toggle("hid");
    console.log("clicked")}
)


