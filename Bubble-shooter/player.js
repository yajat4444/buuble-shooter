var p;
var size;
var heading;
var pVel;
var force;
var boostColor;
var touch;
var playerColor;
var Score;
var Health;

function updatePlayer() {
    boostColor = color(0)
   
    if (keyIsDown(LEFT_ARROW)) {
        heading -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 6;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        pVel.add(force.mult(0.2));
        boostColor = color(0, 255, 0);
    }

    if (p.x > 400) {
        p.x = 0
    }
    if (p.x < 0) {
        p.x = 400
    }
    if (p.y > 400) {
        p.y = 0
    }
    if (p.y < 0) {
        p.y = 400
    }

    pVel.mult(0.978);
    p.add(pVel);
 
    push();
    translate(p.x, p.y);
    rotate(radians(heading));
  
    fill("blue");
    triangle(-size + 1, -size + 1, size + 1, 0, -size + 1, size + 1);
    pop();
    textSize(30);
    text("SCORE: " + Score, 25, 35);

}