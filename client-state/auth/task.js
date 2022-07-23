const signin = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const userWelcome = document.getElementById("user_id");
const form = document.forms[0];
const xhr = new XMLHttpRequest();
if (!localStorage.id) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(document.forms[0]);
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
    xhr.addEventListener("loadend", () => {
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        if (response.success) {
          localStorage.setItem("id", response.user_id);
          signin.classList.toggle("signin_active");
          welcome.classList.toggle("welcome_active");
          userWelcome.textContent = localStorage.getItem("id");
          return;
        } else {
          document.forms[0].login.value = "";
          document.forms[0].password.value = "";
          alert("Неверный логин/пароль");
          return;
        }
      }
    });
  });
} else {
  signin.classList.toggle("signin_active");
  welcome.classList.toggle("welcome_active");
  userWelcome.textContent = localStorage.getItem("id");
}
