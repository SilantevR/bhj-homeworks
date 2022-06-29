const input = document.forms[0].querySelector(".tasks__input");
const taskList = document.getElementById("tasks__list");
let task;

document.addEventListener("submit", (e) => {
  if (input.value.trim() != "") {
    task = document.createElement("div");
    task.setAttribute("class", "task");
    task.innerHTML = `<div class="task__title">
      ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>`;

    taskList.insertBefore(task, taskList.children[0]);
    let button = task.querySelector("a.task__remove");
    button.addEventListener("click", (e) => {
      button.closest("div.task").remove();
      e.preventDefault();
    });

    input.value = "";
    e.preventDefault();
  }
  e.preventDefault();
});
