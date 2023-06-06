"use strict";

const tableInput = document.getElementById("tableInput")

window.onload = function (){

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        for (let user of users){
            addRowForUser(user)
        }
         
      })
  };
  
 function addRowForUser(user){
    let newrow = tableInput.inserRow(-1)
    let cell1 = newrow.inserCell(0)
     cell1.innerHTML = user.name

     let cell2 = newrow.insertCell(1);
     cell2.innerHtml = user.userna,e
 }