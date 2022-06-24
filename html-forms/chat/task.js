const chat = document.querySelector(".chat-widget__side");
const widget = document.querySelector(".chat-widget");
const messages = document.getElementById("chat-widget__messages");
const input = document.getElementById("chat-widget__input");
const answers = [
  "Добрый день! До свидания!",
  "Вы тут?",
  "Что вы хотели?",
  "Все операторы сейчас заняты",
  "У нас Все дома!",
  "Тук - тук",
  "Как к вам обращаться?",
  "Никого нет!",
  "Приходите завтра?",
  "Кажется дождь начинается!",
];
const chatWindow = document.querySelector(".chat-widget__messages-container");
let widgetHeight;
let timerDuplicate;
const scroll = () => {
  widgetHeight =
    chatWindow.clientHeight + chatWindow.getBoundingClientRect().top;
  if (messages.lastElementChild.getBoundingClientRect().top >= widgetHeight) {
    chatWindow.scrollTo(
      0,
      messages.lastElementChild.getBoundingClientRect().top
    );
  }
};

chat.addEventListener("click", () => {
  widget.classList.add("chat-widget_active");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value != "") {
    messages.innerHTML += `<div class="message message_client">
    <div class="message__time">${new Date().getHours()} : ${new Date().getMinutes()} </div>
    <div class="message__text">${input.value}</div>
</div>`;
    input.value = "";
    setTimeout(() => {
      if (messages.lastElementChild.classList.contains("message_client")) {
        messages.innerHTML += `<div class="message">
    <div class="message__time">${new Date().getHours()} : ${new Date().getMinutes()} </div>
    <div class="message__text">${answers[Math.floor(Math.random() * 10)]}</div>
  </div>`;
        scroll();
      }
      clearTimeout(timerDuplicate);
      timerDuplicate = setTimeout(() => {
        if (!messages.lastElementChild.classList.contains("message_client")) {
          messages.innerHTML += `<div class="message">
    <div class="message__time">${new Date().getHours()} : ${new Date().getMinutes()} </div>
    <div class="message__text">${answers[Math.floor(Math.random() * 10)]}</div>
  </div>`;
          scroll();
        }
      }, 30000);
    });
  }
});
