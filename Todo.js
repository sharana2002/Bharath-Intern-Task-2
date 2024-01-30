let inputs = document.getElementById("inp");
let dueDateInput = document.getElementById("dueDate");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value === "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
            <span>${inputs.value}</span>
            <span class="due-date">${dueDateInput.value}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;

        // Sort tasks based on due date
        const tasks = Array.from(text.children);
        tasks.push(newEle);
        tasks.sort((a, b) => {
            const aDate = new Date(a.querySelector(".due-date").innerText);
            const bDate = new Date(b.querySelector(".due-date").innerText);
            return aDate - bDate;
        });

        // Clear existing tasks
        text.innerHTML = "";

        // Append sorted tasks
        tasks.forEach(task => text.appendChild(task));

        inputs.value = "";
        dueDateInput.value = "";
    }
}

function removeTask(element) {
    let taskElement = element.parentElement;
    taskElement.remove();
}

