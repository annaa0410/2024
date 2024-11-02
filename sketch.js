let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r=10 //增加上下幅度
let angle=0 //三角函數內的角度
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Itim-Regular.ttf字型
    font = loadFont("fonts/Itim-Regular.ttf") 
}
//===================================================

function setup() { //只會執行一次
  
  createCanvas(windowWidth, windowHeight);
  background("#f5ebe0")
  
  points = font.textToPoints("TKUET", -300, 80, 200, {
    sampleFactor:0.07
  }); //轉成文字圖檔，放在(0, 0)位置，圖形大小為200，sampleFactor為點數距離大小(點數密度，數字越小點數越小)
  //for (let i=0; i<points.length; i++) { 
    //ellipse(points[i].x,points[i].y,10)
 //}
 angleMode(DEGREES); //宣告角度使用0～360
 //translate(width/2, height/2)//把(0，0)座標點，移到視窗的中間
}
//=============================================

function draw() { //畫圖
  background("#1b263b"); //畫橢圓
  noFill()//以下畫圓或方形不要填滿顏色
  strokeWeight(2) //線條粗細
  
  //========宣告變數
  var r_w = 50+mouseX/50 //宣告一個變數為方框寬度是50
  var bc_w = 50+mouseY/50//宣告一個變數為大園寬度是50
  var sc_w = 25+mouseX/50//宣告一個變數為小圓寬度是25
  //使用迴圈產生25排
  rectMode(CENTER)
  for(let j=0;j<25;j=j+1){ //負責產生幾排
    for(let x=0;x<width;x=x+r_w){ //每一排產生相同的兩個圓與一個方形
      stroke("#98c1d9")
      ellipse(x,25+50*j,bc_w)//畫橢圓(正圓)，25為起始點的座標
      stroke("#778da9")
      rect(x,25+50*j,r_w)//畫方形
      stroke("#e0e1dd")
      ellipse(25+x+r_w,50+50*j,sc_w)//小圓
    }
  }
  strokeWeight(3)
  stroke("#adb5bd")
   
  translate(width/2, height/2)//把(0，0)座標點，移到視窗的中間
  //translate(mouseX, mouseY)//把(0，0)座標點，移到滑鼠座標
  rotate((frameCount/2)%360)//以(0，0)座標點中心點旋轉角度，角度的值為0～360
for (let i=0; i<points.length-1; i++) { 
  fill("#fff9ec")
  noStroke()
  ellipse(points[i].x+r*sin(angle+i*10),points[i].y,10)
  strokeWeight(3)
  stroke("#adb5bd")
  line(points[i].x+r*sin(angle+i*10),points[i].y, points[i+1].x+r*sin(angle+i*10),points[i+1].y)
}
angle = angle + 10 //每畫圖一次就要角度+10
}