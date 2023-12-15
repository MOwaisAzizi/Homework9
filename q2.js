//q2
function ReverseString(str){
   for(let i=str.length;i>=0;i--){
     console.log(str.charAt(i));
   }
}
ReverseString('code4fun');


//q3
// var text = 'code4fun'
// function call(){
//     console.log(text);
// }
// call();

// //q4
// const person1 = {
//     name : 'Ahmad',
//     age : 20,
//     address : 'Herat'
// }
// console.log(person1);

// //q5
// const person2 = {
//     name : 'karim',
//     age : 25,
//     address : 'Herat'
// }
// function callingobject(person2){
//     console.log(person2);
// }
// callingobject(person2);

// //q6
// const car = {
//     startengin:function(){
//         console.log('starting engin...!');
//     }
// }
// console.log(car.startengin());

//q7
Object.prototype.nationalaty = 'Afghan'
console.log(car.nationalaty);


//q8
// class book1 {
//   constructor(title , author){
//     this.title = title;
//     this.author = author
//   }
// }
// //q9
// const b1 = new book1('Harry potter','roberto');


//q10
// class calculator {
//   addintion(a,b){
//     console.log(a+b);
//   }
//     subtraction(a,b){
//       console.log(a-b);
//     }
//   }
// const c1 = new calculator()
// c1.addintion(2,3);

// // //q11
// class shape {
//   constructor(color){
//     this.color = color;
//   }
//   area(a,b,c){
//     return a * b * c ;
//   }
// }
// const s1 = new shape('red');
// console.log(s1.area(2,3,4));

// //q12
// class circle extends shape {
//   constructor(color){
//     super(color)
//   }
// }

//q13
// class phone {
//   constructor(color,mod){
//     this.color = color;
//     this.mod = mod;
//   }
// }
// b=phone.length;
// function test(b){
//   console.log(b);
// }
// test(b);


//q14
// class person1 {
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
// }
// class person2 {
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
// }
// const p1 = new person1('ali',10);
// const p2 = new person2('ali',10);
// function test(a,b){
//   console.log(a==b);
// }
// test(p1,p2);


//q15
// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"karim",
//   lastName: "sharifi"
// }
// const person2 = {
//   firstName:"Ahmad",
//   lastName: "alizada"
// }
// console.log(person.fullName.call(person1));


//q16
// class City{
//   constructor(population,government){
//     this.population = population;
//     this.government = government;
//   }
//   static name() {
//     console.log('every city has a name');
//   }
// }
// City.name();


//q17
// class student{
//   constructor(name){
//     this.name = name;
//   }
//  get sname(){
//  return this.name;
//  }
//  set sname(name){
//  this.name= name
// }
// }
// const s1 = new student('Ahmad');
// s1.sname = 'ali';
// console.log(s1.sname);


var person = {
  id : 1000,
  name : 'Ahmad',
  favoriteBooks : [
 {id :22, name:'js',page:453},
 {id :2, name:'react.js',page:1253}
  ],
  address : {country :'Afghanistan',provice : 'Herat',district:'Guryan'},
  frinds:[
    {
      id : 1098,
      name:'karim',
      favoriteBooks: [
        {id :1, name:'CSS with jones',page:444},
        {id :2, name:'react.js',page:876}
      ],
      address : {country :'Afghanistan',provice : 'Herat',district:'kahrokh'}
    },
      {
        id : 1009,
        name:'mohamood',
        favoriteBooks: [
          {id :1, name:'node.js',page:444},
          {id :2, name:'express.js',page:876}
        ],
        address : {country :'Afghanistan',provice : 'Herat',district:'gozera'}, 
    },
  ],
};

q18
for(let x in person.favoriteBooks){
  console.log(person.favoriteBooks[x]);
}

q19
for(let x in person.frinds){
  console.log(person.frinds[0].favoriteBooks);
  console.log(person.frinds[1].favoriteBooks);
}




//  console.log(obj.cars[].name);