class Animal{
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
  }

  makeSound(){
    return(`${this.name} makes a noise.`);
  }

  getBreed(){
  return `The name of the breed is ${this.breed}`;
 }

 static animalBehav(animal){
  if (animal instanceof Animal.Cat) {
    console.log("This is cat with Meow sound");
  }
  else if (animal instanceof Animal.Dog) {
    console.log("This is dog with Woof sound");
  }

 }

}

const animalOne = new Animal('Dog', 'German Shepherd');
const animalTwo = new Animal('Cat', 'Abyssinian')
console.log(animalOne.makeSound());
console.log(animalTwo.makeSound())
console.log(animalOne.getBreed());
console.log(animalTwo.getBreed());
//console.log(animalOne.getName()) // TypeError: animalOne.getName is not a function

module.exports = { Animal };
