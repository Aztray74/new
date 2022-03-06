
let move = 10;
let r = 0;
let m = 10;

var drop = [];

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  angleMode(DEGREES);
  noStroke();
  for (var i = 0; i < 200; i++) {
    drop[i] = new Drop();
  }
}

function draw() {
  background(30);
  //---rain---
  for (let i = 0; i < 200; i++) {
  drop[i].show();
  drop[i].update();
  }
  //---clock---
  clock();
  clockparts();
  pointer1();
  pointer2();
  
  //dog - body parts---
  jaw();
  Tail();
  head();
  fuzzle();
  nose();
  //jaw(Open);
  body();
  leftleg();
  rightleg();
  leftear();
  rightear();
  backleg();
  star();
  star2();
  frame(width * 0.17, height * 0.02, 2.1);
  frame();
  rain();
  //coordinates();
}

function Drop(){
  this.x = random(0, width);
  this.y = random(0, -height);
  this. show = function(){
    noStroke();
    fill(255);
    ellipse(this.x, this.y, .5, 35)
  }
this.update = function(){
  this.gravity = 1.05;
  this.speed = random(5,100);
  this.y = this.y + this.speed*this.gravity;
  if (this.y > height){
    this.y = random(0, -height);
  }
} 
}
function mousePressed() {
  if (
    mouseX > width * 0.15 &&
    mouseX < width * 0.35 &&
    mouseY > height * 0.4 &&
    mouseY < height * 0.6
  ) {
    console.log("mouse beep in here");
    move = -move;
  }
}

function head() {
  push();
  fill(30);
  beginShape();
  //head
  vertex(width * 0.32, height * 0.34);
  vertex(width * 0.32, height * 0.55);
  vertex(width * 0.61, height * 0.55);
  vertex(width * 0.61, height * 0.34);
  endShape(CLOSE);
  pop();
}

function fuzzle() {
  //fuzzle
  push();
  fill(999);
  beginShape();
  vertex(width * 0.2, height * 0.4);
  vertex(width * 0.2, height * 0.55);
  vertex(width * 0.44, height * 0.55);
  vertex(width * 0.44, height * 0.4);
  endShape(CLOSE);
  pop();
}
function nose() {
  //nose
  push();
  fill(30);
  beginShape();
  vertex(width * 0.22, height * 0.42);
  vertex(width * 0.22, height * 0.5);
  vertex(width * 0.33, height * 0.5);
  vertex(width * 0.33, height * 0.42);
  endShape(CLOSE);
  pop();
}

function jaw() {
  //jaw
  push();
  translate(width / 2, height / 2);
  rotate(move);
  translate(width * -0.48, height * -0.54);
  fill(30);
  beginShape();
  vertex(width * 0.28, height * 0.6);
  vertex(width * 0.36, height * 0.66);
  vertex(width * 0.45, height * 0.57);
  endShape(CLOSE);
  pop();
}
function body() {
  //body
  push();
  fill(30);
  beginShape();
  vertex(width * 0.52, height * 0.53);
  vertex(width * 0.52, height * 0.65);
  vertex(width * 0.7, height * 0.65);
  vertex(width * 0.7, height * 0.53);
  endShape(CLOSE);
  pop();
}
function leftear() {
  //left ear
  push();
  fill(30);
  beginShape();
  vertex(width * 0.49, height * 0.23);
  vertex(width * 0.45, height * 0.34);
  vertex(width * 0.54, height * 0.34);
  endShape(CLOSE);
  pop();
}
function rightear() {
  //right ear
  push();
  fill(999);
  beginShape();
  vertex(width * 0.56, height * 0.4);
  vertex(width * 0.61, height * 0.48);
  vertex(width * 0.7, height * 0.38);
  endShape(CLOSE);
  pop();
}
function Tail() {
  //tail
  push();
  //translate(width/2,height/2)
  //rotate(Wag);
  //translate(width*-2,height*-2);
  fill(999);
  beginShape();
  vertex(width * 0.78, height * 0.54);
  vertex(width * 0.79, height * 0.5);
  vertex(width * 0.68, height * 0.54);
  vertex(width * 0.68, height * 0.56);
  endShape(CLOSE);
  pop();
}
function rightleg() {
  //right leg
  push();
  fill(999);
  beginShape();
  vertex(width * 0.47, height * 0.61);
  vertex(width * 0.47, height * 0.64);
  vertex(width * 0.52, height * 0.64);
  vertex(width * 0.52, height * 0.61);
  endShape(CLOSE);
  pop();
}
function leftleg() {
  //left leg
  push();
  fill(999);
  beginShape();
  vertex(width * 0.49, height * 0.66);
  vertex(width * 0.49, height * 0.62);
  vertex(width * 0.57, height * 0.62);
  vertex(width * 0.57, height * 0.66);
  endShape(CLOSE);
  pop();
}
function backleg(xPos, yPos, rotation) {
  push();
  fill(999);
  beginShape();
  vertex(width * 0.69, height * 0.66);
  vertex(width * 0.69, height * 0.62);
  vertex(width * 0.61, height * 0.62);
  vertex(width * 0.61, height * 0.66);

  //vertex(width * 0.56, height * 0.67);
  endShape(CLOSE);
  pop();
}
function star() {
  push();
  fill(0, 0, 300);
  beginShape();
  translate(width / 2.9, height / 2.77);
  rotate(mouseX,mouseY);
  translate(width * -0.36, height * -.36);
  vertex(width * 0.35, height * 0.32);
  vertex(width * 0.36, height * 0.34);
  vertex(width * 0.39, height * 0.35);
  vertex(width * 0.37, height * 0.37);
  vertex(width * 0.38, height * 0.41);
  vertex(width * 0.345, height * 0.39);
  vertex(width * 0.312, height * 0.405);
  vertex(width * 0.325, height * 0.37);
  vertex(width * 0.31, height *0.34);
  vertex(width * 0.34, height * 0.34);
  endShape(CLOSE);
  pop();
}
function star2() {
  push();
  //rotate(mouseX,mouseY)
  fill(0, 0, 300);
  translate(width / 2.13, height / 2.53);
  rotate(mouseX,mouseY);
  translate(width * -0.476, height * -.391);
  beginShape();
  vertex(width * 0.51, height * 0.3);
  vertex(width * 0.52, height * 0.36);
  vertex(width * 0.57, height * 0.38);
  vertex(width * 0.52, height * 0.4);
  vertex(width * 0.53, height * 0.46);
  vertex(width * 0.48, height * 0.41);
  vertex(width * 0.424, height * 0.44);
  vertex(width * 0.445, height * 0.38);
  vertex(width * 0.42, height * 0.34);
  vertex(width * 0.47, height * 0.34);
  endShape(CLOSE);
  pop();
}
function glasses(xPos, yPos, rotation) {
  //glasses
  push();
  fill(0, 0, 300);
  //translate(xPos,yPos)
  beginShape();
  ellipse(width * 0.35, height * 0.35, 50);
  endShape(CLOSE);
  pop();
}
function glasses2(xPos, yPos, rotation) {
  //glasses2
  push();
  fill(0, 0, 300);
  beginShape();
  ellipse(width * 0.52, height * 0.39, 70);
  endShape(CLOSE);
  pop();
}

function frame(xPos, yPos, rotation) {
  //frame
  push();
  translate(xPos, yPos);
  fill(0, 0, 300);
  beginShape();
  rotate(rotation);
  rectMode(CENTER);
  vertex(width * 0.34, height * 0.36);
  vertex(width * 0.45, height * 0.37);
  vertex(width * 0.45, height * 0.39);
  vertex(width * 0.34, height * 0.38);
  endShape(CLOSE);
  pop();
}
function clock() {
  push();
  noStroke();
  translate(300, 300);
  rotate(r);
  r = r + 30;
  ellipseMode(RADIUS);
  fill(170, 220, 0);
  ellipse(0, 0, 270, 270);
  ellipseMode(CENTER);
  fill(33);
  //ellipse(0,0,300,300)
  pop();
}
function pointer1() {
  push();
  noStroke();
  fill(180, 0, 0);
  translate(width / 2, height / 2);
  rotate(r);
  translate(width * -0.5, height * -0.5);
  r = r + 1;
  rect(290, 100, 30, 210);
  triangle(305, 53, 272, 103, 337, 103);

  pop();
}
function pointer2() {
  push();
  noStroke();
  fill(80, 100, 320);
  translate(width / 2, height / 2);
  rotate(m + 10);
  translate(width * -0.5, height * -0.5);
  m = m + 5;
  rect(290, 170, 30, 140);
  triangle(305, 134, 272, 178, 337, 178);
  pop();
}
function clockparts(){
  noStroke();
  fill(30);
  rect(300,37,20,50)
  rect(41,300,50,20)
  rect(300,513,20,50)
  rect(510,300,50,20)
}
function rain(){
  //fill(600)
  this. x = 30;
  this. y = 30;
  line(544,20,530,43)
}

function coordinates() {
  //for development purposes
  fill(255, 0, 0);
  noStroke();
  text("(" + mouseX + "," + mouseY + ")", mouseX, mouseY);
}
