// https://meyerweb.com/eric/tools/css/reset/ 사이트에서 reset.css 가져오기

// index.html에 canvas 추가하고
<canvas id="jsCanvas" class="canvas"></canvas>

// style.css로 reset.css를 import하고 꾸며줌
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


// div.controls_color*9 으로 한번에 9개의 코드를 작성함
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


// .(class)controls 안의 .(class) controls_colors를 꾸며줌
// 9개의 색깔의 행을 flex로 일렬로 만들고
.controls .controls_colors {
  display: flex;
}

// .(class)controls의 margin-top을 60px정도 띄어주고
.controls {
  margin-top: 60px;
}

// border-radius를 width(폭)의 반인 25px로 동그랗게 만들고
// cursor를 갖다대면 pointer로 바뀌게함
.controls_colors .controls_color {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
