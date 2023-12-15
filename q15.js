const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"karim",
    lastName: "sharifi"
  }
  const person2 = {
    firstName:"Ahmad",
    lastName: "alizada"
  }
  console.log(person.fullName.call(person1));
  