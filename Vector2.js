//constructor for the vector2 object
var Vector2 = function () {
    this.x = 0;
    this.y = 0;
}

//set the components of the vector object
Vector2.prototype.set = function (x, y) {
    this.x = x;
    this.y = y;
}

//add two vectors together
Vector2.prototype.Add = function (otherVector) {
    var newVector = new Vector2();
    newVector.set(this.x + otherVector.x, this.y + otherVector.y);
    return newVector;
}

//subtracts a vector from another vector.
Vector2.prototype.Subtract = function (otherVector) {
    var newVector = new Vector2();
    newVector.set(this.x - otherVector.x, this.y - otherVector.y);
    return newVector;
}

//Multiplies one vector from another vector
Vector2.prototype.Multiply = function (otherVector) {
    var newVector = new Vector2();
    newVector.set(this.x * otherVector.x, this.y * otherVector.y);
    return newVector;
}

//normalize the vector
Vector2.prototype.Normalize = function (otherVector) {
    var newVector = new Vector2();

    if (newVector != 0) {
        var oneOverVec = 1 / Math.sqrt(newVector);
        this.x *= oneOverVec;
        this.y *= oneOverVec;
    }
}
