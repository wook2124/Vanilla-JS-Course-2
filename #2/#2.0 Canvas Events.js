// canvas에 마우스를 가져가면 인식할 수 있게함
const canvas = document.getElementById("jsCanvas");

function onMouseMove(event) {
  console.log(event);
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
}


// canvas안의 마우스 위치 좌표값인 offsetX, offsetY 가져오기
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y);
}


// canvas에 마우스를 click했을 때 동작할 mousedown을 만들고
// 반대로 mouse를 땟을 때 painting이 false 되도록 mouseup도 만듦
const canvas = document.getElementById("jsCanvas");
// let으로 painting이 event에 따라 변화되게 정의함
let painting = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  painting = false;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
}


// 최종 코드
const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}
// mouseup은 canvas 안에서 mouse를 땠을 때 작동
// mouseleave는 canvas에서 mouse가 나온 상황에 작동
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
