/*** Object Constructors ***/
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.jpg";
  this.image_alt = "A cute grey cat with giant green eyes";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.image_alt = "An adorable little dog with big ears and orange fur";
}

function Bird(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bird.jpg";
  this.image_alt = "A puff ball grey and white bird sitting on a branch";
}

/*** Global Variables ***/
let animals = [new Cat(), new Dog(), new Bird()];
let names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  let randomIdx = getRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Bird) 
  {
    return new Bird(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  let randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  return getRandomIndex(5);
}

/*** Document Load ****/
function onLoad() {

  // generate a random animal when the document opens
  let animal = generateRandomAnimal();
  
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);


  





  document.getElementById("saveButton").addEventListener("click", function() {
    // save the animal to the local storage
    localStorage.setItem("savedAnimal", JSON.stringify(animal));

    // if this button was clicked, hide button and show message to user
    document.getElementById("saveButton").style.display = "none";
    document.getElementById("saveStatus").innerText = "Saved!";
  })
}


