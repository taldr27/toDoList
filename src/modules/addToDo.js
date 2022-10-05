import ToDo from './toDoConstructor.js';

/* Store Tasks */

export default function addTask(task) {
  const toDos = JSON.parse(localStorage.getItem('taskArr')) || [];
  const counter = toDos.length + 1;
  const newTask = new ToDo(counter, task);

  toDos.push(newTask);
  localStorage.setItem('taskArr', JSON.stringify(toDos));

  const taskfield = document.querySelector('.text-field');
  taskfield.value = '';
}