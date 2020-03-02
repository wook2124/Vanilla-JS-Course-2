// canvas는 어마어마한 능력을 갖고있는 html5의 한 요소임
// 그 능력은 canvas안에 있는 pixel들을 다루는 것임
// context는 canvas 안에서 pixel들을 control하는 장치임
// CanvasRenderingContext 2D 활용하기(3D로도 작업가능함)
// https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D
const ctx = canvas.getContext("2d");

// 지금 작업하고 있는 모든 line(선)들이 #2c2c2c(검정색) 색상을 갖음
ctx.strokeStyle = "#2c2c2c";
// 선의 너비가 2.5px
ctx.lineWidth = 2.5;


// if, 클릭하지 않고 마우스를 움직였을 때에는(!painting) 
// beginPath, path를 시작함(path는 line)
// moveTo, path를 만들고 나서 마우스의 x, y좌표로 path를 옮김
// else, 마우스를 click해서 painting이 시작되면
// lineTo, 그 전 x, y좌표의 path에서 현재 x, y좌표의 path까지 직선으로 연결함
// 마지막으로 stroke(선을 긋는 것)으로 아주 작은 line(선)들이 끊임없이 이어짐
if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }


// 최종 코드
// pixel을 다루는 window가 얼마나 큰지 canvas에게 알려주기 위해 canvas.width, canvas.height 추가함
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
