// path는 시작점과 움직이는 것이 보이지 않기때문에 console.log로 출력하고
// line은 가시적으로 보이지만 path와 비교를 위해 console.log로 출력함
if (!painting) {
    console.log("creating path in ", x, y)
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    console.log("creating line in ", x, y)
    ctx.lineTo(x, y);
    ctx.stroke();
  }


// ctx.closePath() 실험
// path가 mouse를 움직일 때마다 line과 함께 계속해서 다시 생기지 않고
// 처음 mouse를 click한 곳으로 시작점이 고정됨
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.closePath();
    }
  }