// .(class)controls 안에 Fill, Save button 만들기
<div class="controls_btns">
<button id="jsMode">Fill</button>
<button id="jsSave">Save</button>
</div>


// style.css 꾸미기
.controls {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.controls .controls_btns {
    margin-bottom: 30px;
}
// all: unset으로 초기화 시킨 뒤 여러가지 설정을 만짐
// button:active는 button을 누르게 되면 active(동적)으로 움직이는 것을 뜻함
.controls_btns button {
    all: unset;
    cursor: pointer;
    background-color: white;
    padding: 5px 0px;
    width: 80px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 2px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
  }
  
  .controls_btns button:active {
    transform: scale(0.98);
  }


// Fill과 Save 버튼 위에 Brush의 크기를 조절해줄 range(범위창)을 만들기
// default(기본값 value) 2.5부터 시작해서
// min(최소) 0.1부터 max(최대) 5.0까지 0.1의 step(by step)으로 움직이는 input range 완성
<div class="controls_range">
<input
  type="range"
  id="JsRange"
  min="0.1"
  max="5.0"
  value="2.5"
  step="0.1"
/>
</div>