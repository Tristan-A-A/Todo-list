function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;
    if (taskText === '') {
        return;
    }

    const taskList = document.getElementById('tasks');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    taskList.appendChild(newTask);
    taskInput.value = '';
}
