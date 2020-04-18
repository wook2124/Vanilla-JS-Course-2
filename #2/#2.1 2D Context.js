// CanvasRenderingContext 2D 활용하기(3D로도 작업가능함)
// https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D


// context는 canvas 안에서 pixel들을 control하는 장치
const ctx = canvas.getContext("2d");


// 지금 작업하고 있는 모든 line(선)들이 #2c2c2c(검정색) 색상을 갖음
ctx.strokeStyle = "#2c2c2c";
// 선의 너비가 2.5px
ctx.lineWidth = 2.5;


// 만약(if) 클릭하지 않고 mouse를 canvas 안에서 움직였을 때(!painting) 
// beginPath - path를 만들기 시작함
// moveTo - path를 만들면 mouse의 x, y좌표로 path를 옮김
if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
// 그렇지 않고(else) mouse를 click해서 painting를 하면
// lineTo - 그 전 x, y좌표의 path에서 현재 x, y좌표의 path까지 직선(line)으로 연결함
// 그리고 stroke(선을 긋는 것)으로 아주 작은 line(선)들을 끊임없이 이어나감
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }


// 최종 코드
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 550;

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

function onMouseDown(event) {
  painting = true;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
