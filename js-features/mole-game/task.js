const dead = document.getElementById(`dead`);
const alive = document.getElementById(`lost`);
const getHole = (index) => document.getElementById(`hole${index}`);
for (let index = 1; index <= 9; index++) {
  getHole(index).onclick = function () {
    if (getHole(index).className === "hole hole_has-mole") {
      if (dead.textContent >= 10) {
        alert("Вы выйграли!");
        dead.textContent = 0;
        alive.textContent = 0;
        return;
      }
      return dead.textContent++;
    } else if (getHole(index).className === "hole") {
      if (alive.textContent >= 5) {
        alert("Вы проиграли!");
        dead.textContent = 0;
        alive.textContent = 0;
        return;
      }
      return alive.textContent++;
    }
  };
}
