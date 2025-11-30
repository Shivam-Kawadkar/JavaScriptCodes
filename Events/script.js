// let btn1 = document.querySelector("#btn");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// let btn2 = document.querySelector("div");

// btn2.onmouseover = function () {
//     alert("You hovered over the div!");
// }

let btn1 = document.querySelector("#btn");
const handler1 = (evt) => {
    console.log("Button was clicked!");
};
btn1.addEventListener("click", handler1);

btn1.addEventListener("click", (evt) => {
    console.log("Button was clicked! ----- Handler 2");
});
btn1.removeEventListener("click", handler1);