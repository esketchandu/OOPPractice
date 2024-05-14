const Animal = require('./animal');

class Dog extends Animal{
  constructor(name, breed, age, color, noiseType){
    super(name, breed);
    this.age = age;
    this.color = color;
    this.noiseType = noiseType;
  }

  makeSound(){
    return(`${this.name} of ${this.breed} makes a ${this.noiseType} noise.`);
  }

  getName(){
    return(`The name of the dog is ${this.name}.`);
   }
}

const dogOne = new Dog('Mcale', 'German Shepherd', 5, 'Brown', 'Wowwww')
console.log(dogOne.makeSound());
console.log(dogOne.getName());
console.log(dogOne.getBreed());

module.exports = Dog;
