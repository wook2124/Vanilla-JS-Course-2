// if문으로 range에 event가 발생할 때마다 handleRangeChange function 실행
// bar를 움직일때마다 target의 value 값이 변하는 것을 출력함
function handleRangeChange(event) {
  console.log(event.target.value);
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}


// default value(기본값, 2.5)에서 ctx.lineWidth의 size가 
// bar의 움직임에 따라 변경될 수 있도록 override(재정의)함
function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}


// jsMode - Fill을 누르면 전체 색상을 바꿔줄 수 있는 Mode를 만들고
const mode = document.getElementById("jsMode");
// painting과 동일하게 filling 역시 처음에는 false로 default value(기본값)을 설정함
let filling = false;
// "click" event로 handleModeClick function이 실행되고
// if filling ===(equal) true라면, 즉 filling = false 상태인 <Painting Mode>면
// mode(button)을 "FILL" text로 채우고
// else면 filling = true로 <Filling Mode>가 되고 mode(button)을 "PAINT" text로 바꿔줌
function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
// 추가로 fill, paint 둘 다 소문자로 적어도 대문자로 변형되도록 설정함
text-transform: uppercase;


// 최종 코드
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
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
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
