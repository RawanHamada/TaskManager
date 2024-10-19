let tasks = [];
let taskId = 1;

function showMenu() {
    console.log(`Task Manager Menu:
1. Add Task
2. View Tasks
3. Toggle Task Completion
4. Edit Task
5. Delete Task
6. Search for tasks by name
7. Exit`);

    let option = prompt(
        "Enter a choice:"
    );

    menuOption(option);
}

function menuOption(option) {
    switch (option) {
        case '1':
            addTask();
            break;
        case '2':
            viewTasks();
            break;
        case '3':
            toggleTaskCompletion();
            break;
        case '4':
            editTask();
            break;
        case '5':
            deleteTask();
            break;
        case '6':
            searchTaskByName();
            break;
        case '7':
            console.log('Exiting Task Manager...');
            return;
        default:
            console.log('Invalid choice, please enter a number between 1 and 6.');
            showMenu();
    }
}

// Add a new task
function addTask() {
    let descOfTask = prompt('Enter the task description:');
    tasks.push({
        id: taskId++,
        description: descOfTask,
        completed: false
    });

    console.log('Task added: "' + descOfTask + '" ');
    showMenu();
}

// View all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        let allTask = "Tasks: \n";
        tasks.forEach(task => {
            allTask += `${task.id}. ${task.description} [${task.completed ? 'Completed' : 'Not Completed'}]\n`;
        });
        console.log(allTask);

    }
    showMenu();
}

// Toggle task completion status
function toggleTaskCompletion() {
    let taskId = prompt('Enter the task ID to toggle completion:');
    let task = tasks.find(t => t.id === parseInt(taskId));
    if (task) {
        task.completed = !task.completed;
        console.log(`Task "${task.description}" is now marked as ${task.completed ? 'completed' : 'Not complete'}.`);
    } else {
        console.log('Task not found.');
    }
    showMenu();
}


// Edit a task description
function editTask() {
    let taskId = prompt('Enter the task ID to edit:');
    let task = tasks.find(t => t.id === parseInt(taskId));
    if (task) {
        let newDescription = prompt('Enter the new description:');
        task.description = newDescription;
        console.log(`Task "${taskId}" updated to: "${newDescription}" `);

    } else {
        console.log("Task not found.");

    }
    showMenu();
}

// Delete a task
function deleteTask() {
    let taskId = prompt('Enter the task ID to delete:');
    let taskIndex = tasks.findIndex(t => t.id === parseInt(taskId));
    if (taskIndex !== -1) {
        const delTask = tasks.splice(taskIndex, 1)[0];
        console.log(`Task deleted: "${delTask.description}"`);
    } else {
        console.log('Task not found.');
    }
    showMenu();
}

// Search for tasks by name
function searchTaskByName() {
    let name = prompt('Enter task name to search:');
    let filteredTasks = tasks.filter(t => t.description.includes(name));
    if (filteredTasks.length > 0) {
        let taskList = 'Found tasks:\n';
        filteredTasks.forEach(task => {
            taskList += `${task.id}. ${task.description} [${task.completed ? 'Completed' : 'Not complete'}]\n`;
        });
        console.log(taskList);
    } else {
        console.log('No tasks found matching that name.');
    }
    showMenu();
}

// Start lunch
showMenu();