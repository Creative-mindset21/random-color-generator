const container = document.querySelector(".random-color");

function randomColor() {
  let r = Math.floor(Math.random() * 265);
  let g = Math.floor(Math.random() * 265);
  let b = Math.floor(Math.random() * 265);

  return `rgb(${r}, ${g}, ${b})`;
}

let size = window.innerWidth / 30;

function generateColors() {
  for (let i = 0; i < size; i++) {
    let color = randomColor();
    container.innerHTML += `
        <div class="random">
          <div class="color-code" style='background: ${color}'></div>
          <div class="color-data">
            <div class="code">${color}</div>
            <span class="btn" onclick="copyToClipboard('${color}')"><i class="bx bx-clipboard" ></i></span>
          </div>
        </div>
        `;
  }
}

function copyToClipboard(a) {
  navigator.clipboard.writeText(a);
  alert("Copied");
}

generateColors();
