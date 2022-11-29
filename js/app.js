let inOne = document.querySelector(".one");
let inBtn = document.querySelector(".btn");

let body = document.querySelector("body");
setInterval(() => {
    let a = Math.floor(Math.random() * 255 - 1 + 1) + 1
    let b = Math.floor(Math.random() * 255 - 1 + 1) + 1
    let c = Math.floor(Math.random() * 255 - 1 + 1) + 1
    body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}, 2000);

inBtn.addEventListener("click", ()=> {
    inOne.classList.toggle("active");
});