// canvas에 마우스를 가져가면 인식할 수 있도록 javascript 작성하기
const canvas = document.getElementById("jsCanvas");

function onMouseMove(event) {
  console.log(event);
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
}

// canvas안의 마우스 위치 좌표값인 offsetX, Y 가져오기
// clientX, Y는 윈도우 안에 있는 마우스 위치 좌표값
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y);
}

// canvas에 마우스를 click했을 때 동작할 mousedown을 만들어줌
// 반대로 mouse를 땟을 때 painting이 false 되도록 mouseup도 만들어줌
const canvas = document.getElementById("jsCanvas");

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

// mouseleave는 canvas에서 완전히 나온 상황이라 function에 추가할 기능이 없지만
// mouseup은 canvas 안에서의 작동이기 때문에 function에 추가할게 있으니 stopPainting만 호출해옴!
const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(event) {
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

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
