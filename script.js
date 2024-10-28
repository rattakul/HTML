//Defining a Javascript Object

// const user = {
//     id: 5,
//     firstNane: "rattakul",
//     lastName: "konngam",
//     age: 29,
//     address: {
//         street: "123 Main St",
//         city: "Bangkok",
//         state: "TH",
//         postalCode: "1234"
//     },
//     phoneNumber: [
//         {
//             type: "home",
//             number: "02-000-5555"
//         },
//          {
//              type: "work",
//             number: "082-333-5555"
//          }
//     ]
// }
// //json.stringify() 
// const userJSON = JSON.stringify(user);
// console.log(userJSON);

// //JSON.parse()
// const apiResponse = `{"id":5, "firstName": "John", "lastName": "Sara"}`

// const userObj  = JSON.parse(apiResponse);
// console.log(userObj);
// console.log(userObj.firstName);

// const fs = require("fs");

// fs.readFile("user.json", (error, data) =>{
//   if(error){
//       console.error(error);

//       throw err;
//   }

//   const user = JSON.parse(data);

//   console.log(user);
// })
function toggleLED() {
    fetch('/toggleLED')
    .then(response => response.text())
    .then(data => {
        console.log(data);
        var status = document.getElementById('status');
        if (status.innerHTML === "Status: OFF") {
            status.innerHTML = "Status: ON";
        } else {
            status.innerHTML = "Status: OFF";
        }
    });
}