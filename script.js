"use strict";
// Selecting DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const darkModeToggle = document.getElementById('dark-mode-toggle');
// Ensure elements exist in the DOM before using them
if (!taskInput || !addTaskButton || !taskList || !darkModeToggle) {
    throw new Error('One or more required elements are missing from the DOM.');
}
// Dark Mode State
let darkMode = false;
// Add Task Functionality
addTaskButton.addEventListener('click', () => {
    if (!taskInput || !taskList)
        return;
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <button class="edit-task">Edit</button>
            <button class="delete-task">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        // Toggle completed state
        const checkbox = taskItem.querySelector('.task-checkbox');
        if (checkbox) {
            checkbox.addEventListener('change', () => {
                taskItem.classList.toggle('completed', checkbox.checked);
            });
        }
        // Edit Task
        const editButton = taskItem.querySelector('.edit-task');
        const taskTextSpan = taskItem.querySelector('.task-text');
        if (editButton && taskTextSpan) {
            editButton.addEventListener('click', () => {
                const currentText = taskTextSpan.textContent || '';
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentText;
                inputField.className = 'edit-input';
                taskItem.replaceChild(inputField, taskTextSpan);
                editButton.style.display = 'none';
                inputField.addEventListener('blur', () => {
                    const newText = inputField.value.trim() || currentText;
                    taskTextSpan.textContent = newText;
                    taskItem.replaceChild(taskTextSpan, inputField);
                    editButton.style.display = 'inline-block';
                });
                inputField.addEventListener('keypress', (event) => {
                    if (event.key === 'Enter') {
                        inputField.blur();
                    }
                });
                inputField.focus();
            });
        }
        // Delete Task
        const deleteButton = taskItem.querySelector('.delete-task');
        if (deleteButton) {
            deleteButton.addEventListener('click', () => {
                taskItem.remove();
            });
        }
    }
});
// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
});
