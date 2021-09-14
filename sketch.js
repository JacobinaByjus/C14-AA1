var ball = {
  x: 20,
  y: 30,
  r: 30,
  xSpeed: 0,
  ySpeed: 0,
  color: ["blue", "red", "green", "purple"],
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.r);
  fill(ball.color[0]);
  ball.xSpeed = 1;
  ball.x = ball.x + ball.xSpeed;
}
