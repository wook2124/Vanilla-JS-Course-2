// jsColor class 추가하기
const colors = document.getElementsByClassName("jsColor");


// color를 click하면 handleColorClick function이 실행되고 event가 console에 출력됨
function handleColorClick(event) {
  console.log(event.target.style);
}
// Array.from() - ()안에 있는 object(객체)를 Array로 묶어줌
// Array.from()으로 colors를 Array(배열)로 묶고
// forEach로 각각의 color에 "click" event가 발생하면 들을 수 있도록 할당함
Array.from(colors).forEach(color =>
  color.addEventListener("click", handleColorClick)
);


// event가 발생했을 때 알고자 하는 backgroundColor를 color로 지정하고
// default value(기본값, #2c2c2c)에서 ctx.strokeStyle이 
// 다른 color로도 변경될 수 있도록 override(재정의)해줌
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}


// 최종 코드
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

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

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color =>
  color.addEventListener("click", handleColorClick)
);
