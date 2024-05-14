const Animal = require('./animal');

class Cat extends Animal{
  constructor(name, breed, age, color, noisteType){
    super(name, breed);
    this.age = age;
    this.color = color;
    this.noisteType = noisteType;
  }

  makeSound(){
    return(`${this.name} of ${this.breed} type makes ${this.noisteType} noise.`)
  }

  getColor(){
    return `The color of the cat is ${this.color}`;
 }

}

const catOne = new Cat('Wuro', 'Local', '3', 'white', 'myaw')
console.log(catOne.makeSound());
console.log(catOne.getColor());
console.log(catOne.getBreed());

module.exports = Cat;
