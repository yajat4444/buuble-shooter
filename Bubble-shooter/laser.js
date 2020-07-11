lasers = [];
laserVel = [];


function updateLasers() {
    for (var i = 0; i < lasers.length; i++) {

        for (var z = 0; z < bb.length; z++) {
            if (dist(lasers[i].x, lasers[i].y, bb[z].x, bb[z].y) < bbSize / 2) {
                bb[z] = createVector(random(0, width), random(0, height));
                bbVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
                Score++;
            }
        }
        lasers[i].add(laserVel[i]);

        push();
        strokeWeight(2);
        stroke(0);
        line(lasers[i].x, lasers[i].y, lasers[i].x + laserVel[i].x * 4, lasers[i].y + laserVel[i].y * 4)
        pop();
    }
}

function keyPressed() {
    if (keyCode == 32) {
        lasers.push(createVector(p.x, p.y));
        laserVel.push(p5.Vector.fromAngle(radians(heading)).mult(7));
    }
}