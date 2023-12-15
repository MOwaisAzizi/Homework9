class student{
    constructor(name){
      this.name = name;
    }
   get sname(){
   return this.name;
   }
   set sname(name){
   this.name= name
  }
  }
  const s1 = new student('Ahmad');
  s1.sname = 'ali';
  console.log(s1.sname);