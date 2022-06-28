const input = document.forms[0].querySelector(".tasks__input");
const taskList = document.getElementById("tasks__list");
let task;
let buttons;

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value != "") {
    task = document.createElement("div");
    task.setAttribute("class", "task");
    task.innerHTML = `<div class="task__title">
      ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>`;

    taskList.insertBefore(task, taskList.children[0]);
    input.value = "";
    e.preventDefault();
  } else if (e.key === "Enter") {
    e.preventDefault();
  }
  buttons = taskList.querySelectorAll("a.task__remove");
  buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
      item.closest("div.task").remove();
      e.preventDefault();
    });
  });
});
