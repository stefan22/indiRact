
class Person {
   constructor(name = 'john doe', age = 2, major) {
      this.name = name;
      this.age = age;
      this.major = major;

   }// const

   getMajor() {
      return !!this.major;

   }//getMajor


   getGreeting() {
      let resp = `Hi. I am ${this.name} and
           I'm ${this.age} years old
          `;
      if (this.getMajor()) {
         resp += ` and a ${this.major} major.`
      }

      return resp;
   }//getGreeting

}// Person class


class Traveller extends Person {
   constructor(name, age, major, location) {
      super(name,age,major);
      this.location = location;
   }//const

   getLocation() {
      return !!this.location;
   };

   getGreeting() {
      let resp = `Hi. I am ${this.name} and
           I'm ${this.age} years old
          `;
      if (super.getMajor()) {
         resp += ` and a ${this.major} major.`
      }
      if (this.getLocation()) {
         resp += ` and I'm visiting ${this.location}.`
      }

      return resp;
   };

}// Traveller class


const joe = new Traveller('joe moan', 22, 'computer science', 'philly');

console.log(joe.getGreeting());