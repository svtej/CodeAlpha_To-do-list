
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

// Function to add a new task
function Add() {
    // Check if the input field is empty
    if (inputs.value == "") {
        // Display an alert if the input field is empty
        alert("Please Enter Task");
    } else {
        // Create a new <ul> element to represent the task
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        // Append the <ul> element to the task display area
        text.appendChild(newEle);
        inputs.value = "";
        // Add a click event listener to the trash icon for removing the task
        newEle.querySelector("i").addEventListener("click", remove);

        // Function to remove a task when the trash icon is clicked
        function remove() {
            newEle.remove();
        }
    }
}
