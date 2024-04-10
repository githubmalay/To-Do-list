// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Check if tasks exist in localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render tasks from localStorage
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => deleteTask(index);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Add a new task
function addTask() {
  const newTask = taskInput.value.trim();
  if (newTask !== '') {
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    taskInput.value = '';
  }
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

// Clear all tasks
function clearAll() {
  tasks = [];
  localStorage.removeItem('tasks');
  renderTasks();
}

// Initial render
renderTasks();
