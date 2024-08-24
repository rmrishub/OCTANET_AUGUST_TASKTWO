document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    addTaskBtn.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const taskLabel = document.createElement('span');
        taskLabel.className = 'task-label';
        taskLabel.textContent = taskText;

        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.className = 'complete-checkbox';
        completeCheckbox.addEventListener('change', function() {
            taskLabel.classList.toggle('completed', this.checked);
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', function() {
            const newTaskText = prompt('Edit Task:', taskLabel.textContent);
            if (newTaskText) {
                taskLabel.textContent = newTaskText;
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(completeCheckbox);
        li.appendChild(taskLabel);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    }
});