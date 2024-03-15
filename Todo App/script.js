
 function addTask() {
    var inputValue = document.getElementById("taskInput").value;
    if (inputValue === '') {
        alert("Please enter a task!");
        return;
    }
    var task = {
        name: inputValue,
        dateAdded: new Date(),
        completed: false,
        dateCompleted: null
    };
    tasks.push(task);
    document.getElementById("taskInput").value = ''; 
    updateLists(); 
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    tasks[index].dateCompleted = tasks[index].completed ? new Date() : null;
    updateLists(); 
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateLists(); 
}

function updateLists() {
    var pendingTasksList = document.getElementById("pendingTasks");
    var completedTasksList = document.getElementById("completedTasks");
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';
    tasks.forEach(function(task, index) {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onclick = function() {
            toggleComplete(index);
        };
        var label = document.createElement("label");
        label.textContent = task.name;
        if (task.completed) {
            label.className = "completed";
        }
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function() {
            deleteTask(index);
        };
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);
        if (task.completed) {
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    });
}


var tasks = [
    {
        name: "Complete project proposal",
        dateAdded: new Date(),
        completed: false,
        dateCompleted: null
    },
    {
        name: "Buy groceries",
        dateAdded: new Date(),
        completed: true,
        dateCompleted: new Date()
    }
];

updateLists();