
var Enemy = function (x, y)
{
    this.image = document.createElement("img")

    this.position = new Vector2();
    this.position.set(x, y);    this.x = 350
    this.y = -70
    this.width = 150;
    this.height = 150;
   

    this.image.src = "Bulls eye.png";
};


// add enemies
idx = 0;
for (var y = 0; y < level1.layers[LAYER_OBJECT_ENEMIES].height; y++) {
    for (var x = 0; x < level1.layers[LAYER_OBJECT_ENEMIES].width; x++) {
        if (level1.layers[LAYER_OBJECT_ENEMIES].data[idx] != 0) {
            var px = tileToPixel(x);
            var py = tileToPixel(y);
            var e = new Enemy(px, py);
            enemies.push(e);
        }
        idx++;
    }
}