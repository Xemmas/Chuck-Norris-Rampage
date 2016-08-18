
var Enemy = function () {
    this.image = document.createElement("img");
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 150;
    this.height = 150;

    this.image.src = "enemy.png";
};

Enemy.prototype.update = function (deltaTime) {
    if (typeof (this.rotation) == "undefined")
        this.rotation = 0;

    if (keyboard.isKeyDown(keyboard.KEY_SPACE) == true) {
        this.rotation -= deltaTime;
    }
    else {
        this.rotation += deltaTime;
    }
}

Enemy.prototype.draw = function () {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(this.image, 50, 50);
    context.restore();
}