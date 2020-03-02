// recap 요점을 되풀이하다
// path는 시작점과 움직이는 것이 보이지 않기때문에 console.log로 나타내보고,
// line은 선이 눈으로 보이지만 비교를 위해 console.log로 출력해봄
if (!painting) {
    console.log("creating path in ", x, y)
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    console.log("creating line in ", x, y)
    ctx.lineTo(x, y);
    ctx.stroke();
  }


// ctx.closePath() 추가해서 실험해보기
// path가 마우스를 움직일 때마다 line과 함께 계속해서 다시 생기지 않고,
// 시작점은 처음 마우스를 click한 곳으로 한정됨
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