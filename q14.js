class person1 {
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
  }
  class person2 {
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
  }
  const p1 = new person1('ali',10);
  const p2 = new person2('ali',10);
  function test(a,b){
    console.log(a==b);
  }
  test(p1,p2);