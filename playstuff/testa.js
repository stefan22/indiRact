// arguments object no longer bound with arrow fns

const add = function(a,b) {
  console.log(arguments);
  return a + b;
}

console.log(add(9,4,111));


const add1 = (a,b) => {
  //console.log(arguments);
  return a + b;
}

console.log(add1(9, 4, 111));


// this keyword no longer bound 

const user = {
  name: 'mat',
  cities: ['London','Bristol','Los Angeles'],
  displayPlacesLived: function() {
    console.log(this.name);
    console.log(this.cities);
    var name = this.name;

    this.cities.forEach(function(city) {
      console.log(name + ' has lived in ' + city)
    })
  }
};

user.displayPlacesLived();  //no longer bind this own value 

const user1 = {
  name: 'tom',
  cities: ['London', 'Bristol', 'Los Angeles'],
  displayPlacesLived: function () {
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city)
    })
  }
};

user1.displayPlacesLived();

// you can now do this too - put a function after comma

const user3 = {
  name: 'tom',
  cities: ['London', 'Bristol', 'Los Angeles'],
  displayPlacesLived() {
    const citi = this.cities.map((c) => {
      console.log('this is number 3: ', c)
      return c;
    })
  }
}

user3.displayPlacesLived();

const multiplier = {
  numbers: [1,2,3,4,5,6],
  multiplyBy(num) {
    const arr = this.numbers.map((n) => {
      console.log(n*num);
      return n * num;
    })
  }
}

console.log(multiplier.multiplyBy(5));