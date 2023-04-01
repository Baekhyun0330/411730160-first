let points = [[1, -3], [5, -4], [4, -3],[9,1],[7,2],[8,5],[5,4],[5,5],[3,4],[4,9],[2,7],[0,10],[-2,7],[-4,8],[-3,3],[-5,6],[-5,4],[-8,5],[-7,2],[-9,1],[-4,-3],[-5,-4],[0,-3],[2,-7],[2,-6],[1,-3],[2,-7]];
let gradientColor;
let scaleFactor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5);
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
  gradientColor = drawingContext.createLinearGradient(0, 0, width, height);
  gradientColor.addColorStop(1, color("#f28482"));
  gradientColor.addColorStop(0, color("#f6bd60"));
  scaleFactor = 1;
}

function draw() {
  
  
  background(255);
  translate(width/2, height/2);
  scale(scaleFactor, -scaleFactor);
  for (let i = 0; i < 5; i++) {
    push();
    scale((i+1)/5);
    translate(-600 + 90*(i+1), 0);
    strokeWeight(5);
    for (let j = 0; j < points.length-1; j++) {
      let from = color("#f28482");
      let to = color("#f6bd60");
      stroke(lerpColor(from, to, j/points.length));
      line(points[j][0], points[j][1], points[j+1][0], points[j+1][1]);
    }
    let from = color("#f28482");
    let to = color("#f6bd60");
    stroke(lerpColor(from, to, (points.length-1)/points.length));
    line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
    pop();
  }
    
    translate(width/2, height/2);
    scale(scaleFactor); // 使用 scaleFactor 調整縮放比例
    scale(1,-1);
    for (let i = 1; i <= 5; i++) {
      // ...
    
    textSize(30)  //文字大小
  fill("#cdb4db");  //設定顏色
  text("教科系",-50,0)  //顯示文字
  
    }
  
}

function mouseMoved() {
  scaleFactor = map(mouseY, 0, height, 0.2, 2);
}
