let autoX;
let velocidadLineaautopista;
let reboteCabros;
let velCabros;

function setup() {
  createCanvas(600, 600);
  autoX = 300;
  velocidadLineaautopista = 0;
  reboteCabros = 0;
  velCabros = 0.08;
}

function draw() {
  background(120, 160, 90);
  Movimiento();
  dibujarFlores();
  dibujarPista();
  dibujarAuto();
  dibujarTextos();
}

function Movimiento() {
  velocidadLineaautopista += 8;
  if (velocidadLineaautopista > 40) {
    velocidadLineaautopista = 0;
  }

  reboteCabros += velCabros;

  if (mouseIsPressed) {
    autoX = lerp(autoX, mouseX, 0.1);
  } else {
    autoX = lerp(autoX, 300 + sin(frameCount * 0.05) * 80, 0.05);
  }
  autoX = constrain(autoX, 160, 440);
}

function dibujarPista() {
 //carretera
  fill(80, 80, 80);
  noStroke();
  rect(100, 0, 400, 600);
  stroke(255);
  strokeWeight(6);
  line(100, 0, 100, 600);
  line(500, 0, 500, 600);
  noStroke();

  //lineas autopista
  stroke(255, 215, 0);
  strokeWeight(8);
  for (let y = -40 + velocidadLineaautopista; y < height; y += 50) {
    line(300, y, 300, y + 25);
  }
  noStroke();
}

function dibujarAuto() {
  let factorSalto = abs(sin(reboteCabros)) * 25;

  push();
  translate(autoX, 350);

  //autocuerpo
  fill(255, 30, 30);
  rect(-45, -30, 90, 100, 10);
  fill(40, 160, 90);
  rect(-45, -70, 90, 40, 5);

  //ruedas
  fill(30, 30, 30);
  rect(-53, -50, 8, 30, 3);
  rect(45, -50, 8, 30, 3);
  rect(-53, 30, 8, 30, 3);
  rect(45, 30, 8, 30, 3);

  //lucesauto
  fill(255, 215, 0);
  ellipse(-25, -75, 15, 8);
  ellipse(25, -75, 15, 8);

  //cabros
  fill(255, 215, 0);
  ellipse(-60, -10 - factorSalto * 0.5, 25, 40);
  fill(30, 100, 220);
  ellipse(0, -40 + factorSalto, 30, 30);
  fill(240, 40, 40);
  ellipse(60, 10 - factorSalto * 0.7, 25, 40);

  //1auto
  push();
  translate(0, 15);
  rotate(HALF_PI);
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont('Impact');
  text("1", 0, 0);
  pop();
  
  pop();
}

function dibujarTextos() {
  fill(255);
  textSize(42);
  textAlign(CENTER, CENTER);
  textFont('Impact');
  text("NEWBOIS", 300, 55);

  let coloresNascar = [color(255, 215, 0), color(255), color(240, 40, 40), color(30, 100, 220)];
  for (let i = 0; i < 4; i++) {
    fill(coloresNascar[i]);
    rect(180 + (i * 15), 85, 12, 12);
  }

  fill(15, 15, 15);
  textSize(36);
  textAlign(LEFT, CENTER);
  textFont('Impact');
  textStyle(ITALIC);
  text("NVSCVR", 250, 90);
}

function dibujarFlores() {
  for (let y = -40 + velocidadLineaautopista; y < height + 40; y += 80) {
    crearFlor(35, y, color(180, 120, 220), color(255, 215, 0));
    crearFlor(65, y + 30, color(240, 100, 150), color(255));
    
    crearFlor(535, y + 15, color(255, 215, 0), color(15, 15, 15));
    crearFlor(565, y + 50, color(180, 120, 220), color(255));
  }
}

function crearFlor(x, y, colorPetalos, colorCentro) {
  push();
  translate(x, y);
  
  //pslitoflores
  stroke(30, 80, 30);
  strokeWeight(3);
  line(0, 0, 0, 20);
  
  //petalos
  noStroke();
  fill(colorPetalos);
  ellipse(-8, 0, 12, 12);
  ellipse(8, 0, 12, 12);
  ellipse(0, -8, 12, 12);
  ellipse(0, 8, 12, 12);
  
  //centroflor
  fill(colorCentro);
  circle(0, 0, 10);
  pop();
}