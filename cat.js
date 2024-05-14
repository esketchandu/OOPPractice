const { Animal } = require('./animal');

class Cat extends Animal{
  constructor(name, breed, age, color, noiseType){
    super(name, breed);
    this.age = age;
    this.color = color;
    this.noiseType = noiseType;
  }

  makeSound(){
    return(`${this.name} of ${this.breed} type makes ${this.noiseType} noise.`)
  }

  getColor(){
    return `The color of the cat is ${this.color}`;
 }

}


module.exports = { Cat };

Animal.Cat = Cat; // Assigning Cat class to Animal.Cat property
//console.log(Animal.Cat) // Output:[class Cat extends Animal]
//console.log(Cat) // Output: [class Cat extends Animal]
const catOne = new Cat('Wuro', 'Local', '3', 'white', 'myaw');

console.log(catOne.makeSound());
console.log(catOne.getColor());
console.log(catOne.getBreed());
console.log(Animal.animalBehav(catOne));

//Animal.animalBehav(new Animal.Cat());
