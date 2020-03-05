// https://freefmly.github.io/sketch-book/
// https://eunjung-jenny.github.io/paint_js/
// https://joydaheecha.github.io/paintjs/
// 참고해서 이쁘게 꾸미기


// https://developer.mozilla.org/ko/docs/Web/HTML/Element
// HTML 요소 공부하기


// Clear 버튼 추가하기
<button id="jsClear">Clear</button>

const saveBtn = document.getElementById("jsSave");

function handleClearClick() {
  ctx.fillStyle = "white";
  ctx.lineWidth = 2.5;
  range.value = 2.5;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (filling === true) {
    filling = false;
    modeBtn.innerText = "Fill";
  }
}

if (clearBtn) {
  clearBtn.addEventListener("click", handleClearClick);
}


// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>PaintJS</title>
  </head>
  <body>
    <h4>Hello! What do you want to draw?🖌</h4>
    <canvas id="jsCanvas" class="canvas" width="500" height="500"></canvas>
    <div class="controls">
      <div class="controls_range">
        <input
          type="range"
          id="jsRange"
          min="0.1"
          max="5.0"
          value="2.5"
          step="0.01"
        />
      </div>
      <div class="controls_btns">
        <button id="jsMode">Fill</button>
        <button id="jsClear">Clear</button>
        <button id="jsSave">Save</button>
      </div>
      <div class="controls_colors" id="jsColors">
        <div class="controls_color jsColor" style="background-color: #2c2c2c;"></div>
        <div class="controls_color jsColor" style="background-color: white;"></div>
        <div class="controls_color jsColor" style="background-color: #ff3b30;"></div>
        <div class="controls_color jsColor" style="background-color: #ff9500;"></div>
        <div class="controls_color jsColor" style="background-color: #f0f346;"></div>
        <div class="controls_color jsColor" style="background-color: #4cd362;"></div>
        <div class="controls_color jsColor" style="background-color: #5bcbff;"></div>
        <div class="controls_color jsColor" style="background-color: #2460e2;"></div>
        <div class="controls_color jsColor" style="background-color: rgb(223, 33, 197);"></div>
      </div>
    </div>
    <script src="app.js"></script>
    <h5>made by. YW😃</h5>
  </body>
</html>


// stlye.css
@import "reset.css";

h4 {
  display: block;
  font-size: 1em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

h5 {
  display: block;
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

body {
  background-color: #00d4cd;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  line-height: 1;
}

.canvas {
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.controls {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls .controls_range {
  margin-bottom: 10px;
}

.controls .controls_btns {
  margin-bottom: 20px;
}

.controls_btns button {
  all: unset;
  cursor: pointer;
  background-color: white;
  padding: 5px 0px;
  width: 80px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(199, 35, 144, 0.7);
  color: rgba(199, 35, 144, 0.7);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
}

.controls_btns button:active {
  transform: scale(0.97);
}

.controls .controls_colors {
  display: flex;
}

.controls_colors .controls_color {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
  box-shadow: 6px 6px 10px 1px #d18f99;
  cursor: pointer;
}


// app.js
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const modeBtn = document.getElementById("jsMode");
const clearBtn = document.getElementById("jsClear");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = "INITIAL_COLOR";
ctx.fillStyle = "INITIAL_COLOR";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    modeBtn.innerText = "Fill";
  } else {
    filling = true;
    modeBtn.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleRightClick(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "Paint_JS🖌";
  link.click();
}

function handleClearClick() {
  ctx.fillStyle = "white";
  ctx.lineWidth = 2.5;
  range.value = 2.5;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (filling === true) {
    filling = false;
    modeBtn.innerText = "Fill";
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleRightClick);
}

Array.from(colors).forEach(color =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (modeBtn) {
  modeBtn.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

if (clearBtn) {
  clearBtn.addEventListener("click", handleClearClick);
}
