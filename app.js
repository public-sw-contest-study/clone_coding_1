// const a = 5;

// console.log(a + 2);
// console.log(a * 2);
// console.log(a / 2);

// const b = [1,2,3,4,5];
// console.log(b);
// console.log(b[2]);
// b.push("101");
// console.log(b);

// const c = {
//     name: "kosw",
//     points: 10,
//     fat: true,
// };

// console.log(c);
// console.log(c.name);

// function d() {
//     console.log("hello");
// }
// d();

// const age = 10;
// function e(cnt) {
//     return cnt + 2;
// }
// const krage = e(20);
// console.log(krage);

// const age2 = prompt("how old?");
// console.log(typeof "15", typeof parseInt("15"));

// const title = document.querySelector(".hello h1");


// title.innerText = "Hello";

// title.style.color = "blue";

// console.log(title);
// function handleTitleClick() {
//     console.log("tutle was clicked!");
//     title.style.color = "blue";
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// function hacdleWindowCopy(){
//     alert("copy!");
// }
// title.addEventListener("click", handleTitleClick);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", hacdleWindowCopy);
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click",handleTitleClick);
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    // if(h1.classList.contains("active")){
    //     h1.classList.remove("active");
    // }else{
    //     h1.classList.add("active");
    // }
    h1.classList.toggle("active");
}

h1.addEventListener("click",handleTitleClick);