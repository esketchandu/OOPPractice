const { Animal } = require('./animal');

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




module.exports = { Dog };

Animal.Dog = Dog; // Assigning Dog class to Animal.Dog property
const dogOne = new Dog('Mcale', 'German Shepherd', 5, 'Brown', 'Wowwww')

console.log(dogOne.makeSound());
console.log(dogOne.getName());
console.log(dogOne.getBreed());
//console.log(Animal.animalBehav(dogOne));
//Animal.animalBehav(new Animal.Dog()) // Output: the same as console.log(Animal.animalBehav(dogOne))
