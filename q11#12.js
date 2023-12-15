class shape {
  constructor(color){
    this.color = color;
  }
  area(a,b,c){
    return a * b * c ;
  }
}
const s1 = new shape('red');
console.log(s1.area(2,3,4));

//q12
class circle extends shape {
  constructor(color){
    super(color)
  }
}