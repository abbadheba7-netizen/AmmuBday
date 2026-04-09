let input = "";
const correctPassword = "1810";

const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const dots = document.querySelectorAll(".dot");
const keys = document.querySelectorAll(".key");
const passwordBox = document.getElementById("passwordBox");

/* Open Popup */
openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

/* Close Popup */
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  resetInput();
});

/* Keypad Logic */
keys.forEach(key => {

  key.addEventListener("click", function () {

    if (key.classList.contains("empty")) return;

    if (key.classList.contains("clear")) {
      resetInput();
      return;
    }

    if (input.length >= 4) return;

    const number = key.dataset.num;
    if (!number) return;

    input += number;
    updateDots();
    createHeart(key);

    if (input.length === 4) {
      setTimeout(() => {
        if (input === correctPassword) {
          window.location.href = "next.html";
        } else {
          shakeBox();
          resetInput();
        }
      }, 300);
    }
  });
});

function updateDots() {
  dots.forEach((dot, index) => {
    dot.style.background = index < input.length ? "#000" : "#ddd";
  });
}

function resetInput() {
  input = "";
  updateDots();
}

function shakeBox() {
  passwordBox.style.animation = "shake 0.4s";
  setTimeout(() => {
    passwordBox.style.animation = "";
  }, 400);
}

/* 💖 Heart exactly near button */
function createHeart(button) {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("heart");

  button.appendChild(heart);

  setTimeout(() => heart.remove(), 800);
}
