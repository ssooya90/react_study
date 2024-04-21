
function Shape (x,y){

    this.name = 'Shape';
    this.move(x,y);
}

//static 함수를 선언하는 예제
// Shape.create = function(x,y){
//     this.x = x;
//     this.y = y;
// }
//
// Shape.prototype.area = function(){
//     return 0;
// }

// 혹은

Shape.prototype = {
    move : function(x,y){
        this.x = x;
        this.y = y;
    },

    area : function() {
        return 0;
    }
}

var s = new Shape(1,2);
s.area();

console.log(s);
console.log(s.area());

