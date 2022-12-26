class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  
  info() {
   return `${this.name}, was born in ${this.country}`;
  }
}

class BasketballPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
   }
  
  info() {
   return `${this.name}, is ${this.age} years old and knows how to play Basketball`;
  }
}

let playerJuan = new Player("Juan", "Manila");
let playerJohn = new BasketballPlayer("John", "Makati", 34)

console.log(playerJuan.info());
console.log(playerJohn.info());