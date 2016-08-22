var shootTimer = 0;

var bullets = [];


function playershoot() {
    if (player.isDead == false) {
        var bullet = {
            image: document.createElement("img"),
            x: player.x,
            y: player.y,
            width: 5,
            height: 5,
            velocityX: 0,
            velocityY: 0
        }
    };
    bullet.image.src = "Sprites/bullet.png";


    //start off with a velocity that shoots the bullet straight up
    var velX = 0;
    var velY = 1;

    //now rotate this vector according to the ship's current rotation
    var s = Math.sin(player.rotation);
    var c = Math.cos(player.rotation);

    var xVel = (velX * c) - (velY * s);
    var yVel = (velX * s) + (velY * c);

    bullet.velocityX = xVel * bullet_Speed;
    bullet.velocityY = yVel * bullet_Speed;

    //add the bullet to the bullets array
    bullets.push(bullet);
}

