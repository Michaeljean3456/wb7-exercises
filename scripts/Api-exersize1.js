"use strict";

const output = document.getElementById("output");
const inputField = document.getElementById("todoId");
const submitBtn = document.getElementById("submitBtn");

window.onload = function (){
  submitBtn.onclick = submitBtnClicked;
  console.log("Hello world")
};

function submitBtnClicked() {
    console.log("clicked")
  let theUrl = "https://jsonplaceholder.typicode.com/todos/" + inputField.value;
  fetch(theUrl)
    .then(response => response.json())
    .then(info => {
      let message = `TODO: ${info.title} <br>` +
                    `User ID: ${info.userId} <br>` +
                    `Completed: ${info.completed} <br>`;
      output.innerHTML = message;
    })
}