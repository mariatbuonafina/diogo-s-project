// Menu hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Manipulação da lista de tarefas
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const tasksList = document.getElementById('tasks');

// Carregar tarefas do Local Storage
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => addTaskToDOM(task));
}

// Adicionar tarefa
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    addTaskToDOM(task);
    saveTask(task);
    taskInput.value = '';
  }
});

function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Excluir';
  deleteBtn.addEventListener('click', () => {
    removeTask(task);
    li.remove();
  });

  li.appendChild(deleteBtn);
  tasksList.appendChild(li);
}

// Salvar tarefa no Local Storage
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remover tarefa do Local Storage
function removeTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const filteredTasks = tasks.filter((t) => t !== task);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}