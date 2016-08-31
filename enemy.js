
var Enemy = function () {
    this.image = document.createElement("img");
    this.x = 350
    this.y = -70
    this.width = 150;
    this.height = 150;
   

    this.image.src = "enemy.png";
};


Enemy.prototype.draw = function () {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(this.image, 50, 50);
    context.restore();
}