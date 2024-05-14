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

}

const animalOne = new Animal('Dog', 'German Shepherd');
const animalTwo = new Animal('Cat', 'Abyssinian')
console.log(animalOne.makeSound());
console.log(animalTwo.makeSound())
console.log(animalOne.getBreed());
console.log(animalTwo.getBreed());

module.exports = Animal;
