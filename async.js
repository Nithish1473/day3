// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(30);
// },5000)
// setInterval(()=>{
    //  document.writeln("MRU");
//      console.lOg(30);
// },1000)
// console.log(40);
// console.log(50);

//! Promise

// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve,reject)=>{
//     resolve("success");
// })
// console.log(p2);
// p2
// .then((response)=>console.log(response))
// .catch((erre)=>console.log(error))
// .finally(()=>console.log("finally for both"))


//  let p3 = new Promise((resolve,reject)=>{
//     reject("failure");
//  });
// console.log(p3);
// p3.then(data=>{console.log(data)})
// p3.catch(error=>{console.log(error)} )
// p3.finally(()=>{console.log("finally for both")})

//! API fetching
//!https://jsonplaceholder.typicode.com/users

// function fetchUsers(){
//    let response = fetch("https://jsonplaceholder.typicode.com/users");
   //console.log(response);
//    response.then(result=>{
      // console.log(result.json());
//         return result.json().then(data=>{
//          console.log(data);
//          let store = document.getElementById("store");
//          console.log(store);
//          data.map(user=>{
//             store.innerHTML += `
//             <tr>
//                <td>${user.id}</td>
//                <td>${user.name}</td>
//                <td>${user.email}</td>
//                <td>${user.company.name}</td>
//             </tr>
//             `
//          })
//         })
//  })
//     .catch(err=>console.log(err))
// }
// fetchUsers();


// let p = new Promise((resolve , reject)=>{
//    setTimeout(()=>{
//       resolve("Success");
//    },5000 )
// })

// async function demo() {
//    console.log("Start");
//    let x = await p;
//    console.log(x);
//    console.log("End");
// };
// demo();

// async function fetchUsers(params) {
//    let response = await fetch("https://jsonplaceholder.typicode.com/users");
//    let data= await response.json();
//    console.log(data);
   
// }
// fetchUsers();
   

// Take an array of employee objects, where each object contains properties such as epmid, empname, empcompany, empsalary and empaddress where empaddress is further having two more properties of object such as empcity and emparea.
// Print these properties in the form of a table on the ui by using JavaScript.

let userDetails = [
   {
     empId: 1,
     empName: "Nithish",
     empCompany: "Infosys",
     empSalary: 410000,
     empAddress: {
       empArea: "Kompally",
       empCity: "Hyderabad",
     },
   },
   {
     empId: 2,
     empName: "Vamshi",
     empCompany: "TCS",
     empSalary: 120000,
     empAddress: {
       empArea: "KMP",
       empCity: "Hyderabad",
     },
   },
   {
     empId: 3,
     empName: "Tharun",
     empCompany: "Wipro",
     empSalary: 14000,
     empAddress: {
       empArea: "Dulapally",
       empCity: "Hyderabad",
     },
   },
 ];
 
 let empTable = document.getElementById("emp");
 userDetails.map((emp) => {
   empTable.innerHTML += `<tr>
     <td>${emp.empId}</td>
     <td>${emp.empName}</td>
     <td>${emp.empCompany}</td>
     <td>${emp.empSalary}</td>
     <td>${emp.empAddress.empArea}</td>
     <td>${emp.empAddress.empCity}</td>
   </tr>`;
 });
 
 document.body.appendChild(empTable);
   


