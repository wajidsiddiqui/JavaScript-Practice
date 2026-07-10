let rain = document.querySelector(".rain");
let spotlight = document.querySelector(".spotlight");
let matrixContent = document.querySelector("#matrix-text");
let replayBtn = document.querySelector("#replay-button");

const str =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

let originalText = matrixContent.innerText;
let iteration = 0;

const totalColumns = Math.floor(window.innerWidth / 20);

document.addEventListener("mousemove", (e) => {
  spotlight.style.left = e.clientX + "px";
  spotlight.style.top = e.clientY + "px";
});

function randomCharacter() {
  return str[Math.floor(Math.random() * str.length)];
}

function generateCharacters() {
  let html = "";

  for (let i = 0; i < 50; i++) {
    if (i === 0) {
      html += `<span class="char head">${randomCharacter()}</span>`;
    } else {
      html += `<span class="char">${randomCharacter()}</span>`;
    }
  }

  return html;
}

function createRain(i) {
  const column = document.createElement("div");
  column.classList.add("column");

  column.innerHTML = generateCharacters();

  column.style.left = `${i * 20}px`;

  let topPosition = -Math.random() * 1200;
  column.style.top = `${topPosition}px`;

  rain.appendChild(column);

  const speed = Math.random() * 4 + 2;

  setInterval(() => {
    topPosition += speed;

    column.style.top = `${topPosition}px`;

    column.innerHTML = generateCharacters();

    if (topPosition > window.innerHeight) {
      topPosition = -Math.random() * 1200;
    }

  }, 50);
}

for (let i = 0; i < totalColumns; i++) {
  createRain(i);
}
function matrixText() {
  iteration = 0;

  const interval = setInterval(() => {
    matrixContent.innerText = originalText
      .split("")
      .map((char, idx) => {
        if (idx < iteration) {
          return originalText[idx];
        }

        return randomCharacter();
      })
      .join("");

    iteration += 0.5;

    if (iteration >= originalText.length) {
      clearInterval(interval);
      matrixContent.innerText = originalText;
    }
  }, 80);
}

matrixText();

replayBtn.addEventListener("click", () => {
  matrixText();
});

window.addEventListener("resize", () => {
  rain.innerHTML = "";

  const totalColumns = Math.floor(window.innerWidth / 20);

  for (let i = 0; i < totalColumns; i++) {
    createRain(i);
  }
});