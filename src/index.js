document.addEventListener("DOMContentLoaded",(e) => {
   myTasks.addEventListener("submit", () =>
   createNewTask(e,taskDescription)
 );
  let taskDescription = document.getElementById("new-task-description");

  let myTasks = document.getElementById("create-task-form");
 
  let TaskUl = document.getElementById("tasks");
});
  let createNewTask = (e, taskDescription) => {
  
   e.preventDefault();

  let addNewTask = document.createElement("li");
   addNewTask.innerText = taskDescription.value;

  appendTask(addNewTask);
};
  let appendTask = task => {
  document.getElementById("tasks").appendChild(task);
};