// console.log(window);
// console.log(document);



// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
 // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);



// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// ele[0].style.backgroundcolor="tamato"



 // !Spread operator :- it will takeout each and every value from the original array 
 // ! and store it inside one more new array(pure array)
 //? syntax :- [...variable ];

// let x = [...ele]; // console.log(x, Array.isArray(x));
// x.map(element=>{
    // console.log(element)
    // element.style.backgroundColor="orange"
// })




// !

// let ele = document.getElementsByTagName("div");
// console.log(ele);


// ! 
// let ele = document.getElementsByName("formatData")
// console.log(ele, Array.isArray);


// !

// let ele = document.querySelector("#MRU");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);

// let btn = document.querySelector("#btn");
 // ! addEventListner("event", ()=>{})
//     btn.addEventListener("click",()=>{
//         console.log("Button clicked");
//         // alert("hi");
//         document.body.style.backgroundColor="tomato"
//     })
// let divBlock=document.getElementById("divblock");
// divBlock


let ele = document.createElement("h1");
ele.innerText = "Dynamic creation of html element";
ele.setAttribute("id", "demo");
ele.id = "demo";
ele.removeAttribute("id");
 console.log(ele);

let image = document.createElement("img");
image.src = "C:\Users\tamat\OneDrive\Desktop\Training\Training\Screenshot (10).png";
console.log(image);
document.body.appendChild(ele);
document.body.appendChild(image);



