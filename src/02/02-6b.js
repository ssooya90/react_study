
class Shape {
    static create(x,y) {
        return new Shape(x,y);
    }

    // name = 'Shape'; // ES7 문법


    // 생성자
    constructor(x, y) {
        this.name = "Shape";
        this.x = x;
        this.y = y;

    }

    area() {
        return 0;
    }
}

var s = new Shape(1,1);
console.log(s);

console.log(s.area());