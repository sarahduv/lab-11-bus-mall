
// Global variables

var imageContainer = document.getElementById('imageContainer');
var imageSelectionOne = document.getElementById('imageSelectionOne');
var imageSelectionTwo = document.getElementById('imageSelectionTwo');
var imageSelectionThree = document.getElementById('imageSelectionThree');

var imageArray=[];
var maxClicks = 25;
var totalClicks = 0;
var usedBefore = ['place', 'holder', 'fornow'];



// Constructor
function ItemImage(name){
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.timesShown = 0;
  this.timesSelected = 0;
  imageArray.push(this);
}

// New Instances
new ItemImage('bag');
new ItemImage('banana');
new ItemImage('bathroom');
new ItemImage('boots');
new ItemImage('breakfast');
new ItemImage('bubblegum');
new ItemImage('chair');
new ItemImage('cthulhu');
new ItemImage('dog-duck');
new ItemImage('dragon');
new ItemImage('pen');
new ItemImage('pet-sweep');
new ItemImage('scissors');
new ItemImage('shark');
// new ItemImage('sweep');
new ItemImage('tauntaun');
new ItemImage('unicorn');
// new ItemImage('usb');
new ItemImage('water-can');
new ItemImage('wine-glass');


// For Number ONE
//function to pull in src and alts, and to show random image
function showRandomImageOne(){
  // generate a random number 0-7
  var randomIndex = Math.floor(Math.random() * imageArray.length);
  // assign src
  imageSelectionOne.src = imageArray[randomIndex].filepath;
  // assign title
  imageSelectionOne.title = imageArray[randomIndex].name;
  // assign the alt
  imageSelectionOne.alt = imageArray[randomIndex].name;
  // increment times shown
  imageArray[randomIndex].timesShown++;
}

// Event handler number One
function handleImageSelectionOne(event){
  console.log(event.target.alt);
  totalClicks++;

  for (var i=0; i < imageArray.length; i++) {
    if(event.target.alt === imageArray[i].name) {
      imageArray[i].timesSelected++;
    }
  }

  showRandomImageOne();
  showRandomImageTwo();
  showRandomImageThree();

}


// For number TWO
//function to pull in src and alts, and to show random image
function showRandomImageTwo(){
  // generate a random number 0-7
  var randomIndex = Math.floor(Math.random() * imageArray.length);
  // assign src
  imageSelectionTwo.src = imageArray[randomIndex].filepath;
  // assign title
  imageSelectionTwo.title = imageArray[randomIndex].name;
  // assign the alt
  imageSelectionTwo.alt = imageArray[randomIndex].name;
  // increment times shown
  imageArray[randomIndex].timesShown++;
  

}

// Event handler for TWO
function handleImageSelectionTwo(event){
  console.log(event.target);
  totalClicks++;
  showRandomImageOne();
  showRandomImageTwo();
  showRandomImageThree();
}


// For number THREE
//function to pull in src and alts, and to show random image
function showRandomImageThree(){
  // generate a random number 0-7
  var randomIndex = Math.floor(Math.random() * imageArray.length);
  // assign src
  imageSelectionThree.src = imageArray[randomIndex].filepath;
  // assign title
  imageSelectionThree.title = imageArray[randomIndex].name;
  // assign the alt
  imageSelectionThree.alt = imageArray[randomIndex].name;
  // increment times shown
  imageArray[randomIndex].timesShown++;
}

// Event handler
function handleImageSelectionThree(event){
  // imageArray[name].timesSelected++;
  console.log(event.target);
  totalClicks++;
  showRandomImageOne();
  showRandomImageTwo();
  showRandomImageThree();
}




// Event listener
imageSelectionOne.addEventListener('click', handleImageSelectionOne);

imageSelectionTwo.addEventListener('click', handleImageSelectionTwo);

imageSelectionThree.addEventListener('click', handleImageSelectionThree);


// Function Calls
showRandomImageOne();
showRandomImageTwo();
showRandomImageThree();


