// if문을 사용해서, range에 대해서 function을 만들어서 event가 발생하는 것에 대해 출력해보기
function handleRangeChange(event) {
  console.log(event);
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}


// bar를 움직일때마다 target의 value 값이 변하는 것이 출력됨
function handleRangeChange(event) {
  console.log(event.target.value);
}


// default value(기본값, 2.5)에서 ctx.lineWidth의 size가 bar를 움직이면 변경될 수 있도록 override(재정의)해줌
function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}


// jsMode - Fill을 누르면 전체 색상을 바꿔줄 수 있는 Mode
const mode = document.getElementById("jsMode");


// painting과 동일하게 filling 역시 처음에는 false로 default value(기본값)을 설정해서 painting mode로 시작해줌
let filling = false;
// click event가 발생해서 handleModeClick function이 기능하고
// if filling ===(equal) true라면(filling = false 상태인 painting mode이면) mode(button)에 Fill text를 채우고
// 반대로 filling = true로 filling mode이면 Paint text를 채움
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
// 추가로 fill, paint 둘 다 소문자로 적어도 대문자로 변형됨
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
