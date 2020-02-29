// https://meyerweb.com/eric/tools/css/reset/ 사이트에서 reset.css 가져오기
// 그리고 style.css로 import함
// index.html에 canvas 추가해줌
<canvas id="jsCanvas" class="canvas"></canvas>

@import "reset.css";

body {
  background-color: #58b489;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
}

.canvas {
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

// div.controls_color*9 으로 한번에 9개의 코드를 작성함(9개의 color)
// index.html에 9개의 색을 입혀줌
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
    <canvas id="jsCanvas" class="canvas"></canvas>
    <div class="controls">
      <div class="controls_colors" id="jsColors">
        <div class="controls_color" style="background-color: #2c2c2c;"></div>
        <div class="controls_color" style="background-color: white;"></div>
        <div class="controls_color" style="background-color: #ff3b30;"></div>
        <div class="controls_color" style="background-color: #ff9500;"></div>
        <div class="controls_color" style="background-color: #ffcc00;"></div>
        <div class="controls_color" style="background-color: #4cd963;"></div>
        <div class="controls_color" style="background-color: #5ac8fa;"></div>
        <div class="controls_color" style="background-color: #0579ff;"></div>
        <div class="controls_color" style="background-color: #5856D6;"></div>
      </div>
    </div>
    <script src="app.js"></script>
  </body>
</html>

// controls_colors class 안에있는 controls_color class css를 꾸며줌
.controls_colors .controls_color {
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

// 9개의 색깔의 행을 일렬로 만들어줌
.controls .controls_colors {
  display: flex;
}

// 마무리로 controls class 전체를 60px정도 띄어주고
// border-radius는 width(폭)의 반인 25px로 해줘서 동그랗게 만들어주고
// 커서는 갖다대면 pointer로 나오게끔 해줌!
.controls {
  margin-top: 60px;
}

.controls .controls_colors {
  display: flex;
}

.controls_colors .controls_color {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}