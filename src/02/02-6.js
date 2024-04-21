class Shape {
    static crate(x,y) { return new Shape(x, y);}

    name = 'Shape';

    constructor(x, y) {

        this.move(x,y);
    }

    move(x,y){
        this.x = x;
        this.y = y;
    }

    area(){
        return 0;
    }

}

class Circle extends Shape {

    constructor(x, y, radius) {
        super(x,y);
        this.radius = radius;
    }

    area() {
        if (this.radius === 0 ) return super.area();
        return this.radius * this.radius;
    }
}

var s = new Shape(0,0);
var c = new Circle(0, 0,10);




console.log(c)

console.log(s)


var add = (first, second) => first + second;

console.log(add(1,2))


function addNumber(num){

    return function(value) {
        return num + value;
    }

}


console.log(addNumber(10))

var x = 0;
var y = 1;

var obj = {x, y};


console.log(obj)
