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


// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation of html element";
// ele.setAttribute("id", "demo");
// ele.id = "demo";
// ele.removeAttribute("id");
//  console.log(ele);

// let image = document.createElement("img");
// image.src = "C:\Users\tamat\OneDrive\Desktop\Training\Training\Screenshot (10).png";
// console.log(image);
// document.body.appendChild(ele);
// document.body.appendChild(image);


// let vid = document.createElement("video");
// vid.setAttribute("src","./video.mp4");
// vid.setAttribute("controls","controls")
// console.log(vid);
// document.body.appendChild(vid);



//!
// let mainEle = document.createElement("div");
// mainEle.setAttribute("id", "mainBlock");
// mainEle.style.border="2px solid red";
// mainEle.style.width="550px";
// mainEle.style.height="550px";
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg "
// image.style.width = "550px";
// console.log(image);


// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");
// // console.log(bottomEle);




// let h1 = document.createElement("h1");
// h1.innerText = "CAT";
// console.log(h1);

// let btn = document.createElement("button");
// btn.innerText="View More";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="dargerblue";
// btn.style.color="color";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);



// ! 

let form = document.querySelector("form");

let username = document.getElementById("uName");
let password = document.getElementById("uPass");

let gender = document.getElementsByName("gender");
console.log(gender);    

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = gender.value;

    console.log(un , up , gen);
})
