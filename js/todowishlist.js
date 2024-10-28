// To-Do List functionality
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
я
    // Input validation
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Check if the number of tasks is less than 5
    if (taskList.childElementCount >= 5) {
        alert("Maximum possible amount of tasks is 5!");
        return;
    }

    // Create task element
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Add event listener for 'Complete' button
    const completeBtn = taskItem.querySelector(".complete-btn");
    completeBtn.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
    });

    // Add event listener for 'Delete' button
    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        const OK = confirm("Are you sure you want to delete this task?");
        if (OK) {
            taskItem.remove();
        }
        
    });

    // Append task to the list
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
});
