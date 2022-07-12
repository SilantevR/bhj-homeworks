const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();
xhr.addEventListener("load", () => {
  let response = JSON.parse(xhr.responseText);
  title.innerHTML = response.data.title;
  let buttons = response.data.answers;
  buttons.forEach((item) => {
    let button = document.createElement("button");
    button.classList.add("poll__answer");
    button.innerHTML = item;
    answers.append(button);
    button.addEventListener("click", () =>
      alert("Спасибо, ваш голос засчитан")
    );
  });
});
