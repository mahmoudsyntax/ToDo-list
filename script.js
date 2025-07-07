const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// add new task

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

//  function add elemant in task
function addTask(text) {
  const li = document.createElement("li");
  li.className = "task";

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "🗑";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
