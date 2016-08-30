function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype = {
    plus: function(my_vector) {
        return new Vector(this.x + my_vector.x, this.y + my_vector.y);
    },
    minus: function(my_vector) {
        return new Vector(this.x - my_vector.x, this.y - my_vector.y);
    },
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
};

console.log(new Vector(1, 2).plus(new Vector(4, 3)));
console.log(new Vector(1, 2).minus(new Vector(1, 2)));
my_vec = new Vector(3, 4);
console.log(my_vec.length);
my_vec.length = 12;
console.log(my_vec.length);
my_vec.x = 20;
console.log(my_vec.length);
