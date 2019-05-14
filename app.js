
// Global variables

var imageSelectionOne = document.getElementById('imageSelectionOne');
var imageSelectionTwo = document.getElementById('imageSelectionTwo');
var imageSelectionThree = document.getElementById('imageSelectionThree');
var listOfData = document.getElementById('listOfData');


var imageArray=[];
var maxClicks = 25;
var totalClicks = 0;
var imageUsed = [1, 2, 3, 4, 5, 6];
var showingList = false;
var nameArray = [];
var voteArray =[];
var finalChart;


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

// Function to append list to the DOM
// function makeList() {
//   if (!showingList) {

//     var ulEl = document.createElement('ul');

//     for (var i=0; i<imageArray.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = imageArray[i].name + ' was clicked ' + imageArray[i].timesSelected + ' times';
//       ulEl.appendChild(liEl);
//     }

//     listOfData.appendChild(ulEl);
//     showingList = true;

//     imageSelectionOne.removeEventListener('click', handleImageSelection);
//     imageSelectionTwo.removeEventListener('click', handleImageSelection);
//     imageSelectionThree.removeEventListener('click', handleImageSelection);
//   }
// }

// CHART data and fucntion

var data = {
  labels: nameArray,
  datasets: [{
    label: 'Results',
    data: voteArray,
    backgroundColor: [
      'blue',
      'darkgray',
      'lightpurple',
      'lightblue',
      'navy',
      'blue',
      'darkgray',
      'lightpurple',
      'lightblue',
      'navy',
      'blue',
      'darkgray',
      'lightpurple',
      'lightblue',
      'navy',
      'blue',
      'darkgray',
      'lightpurple'
    ],
    hoverBackgroundColor: [
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple'
    ]
  }]
};

function drawChart() {
  var ctx = document.getElementById('voting-chart').getContext('2d');
  finalChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 2000,
        easing: 'easeOutElastic'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });

  imageSelectionOne.removeEventListener('click', handleImageSelection);
  imageSelectionTwo.removeEventListener('click', handleImageSelection);
  imageSelectionThree.removeEventListener('click', handleImageSelection);
}




// Displays images
function showRandomImage(socketEl){
  // generate a random number 0-7
  var randomIndex = Math.floor(Math.random() * imageArray.length);
  while (imageUsed.includes(randomIndex)){
    randomIndex = Math.floor(Math.random() * imageArray.length);
  }
  // assign src
  socketEl.src = imageArray[randomIndex].filepath;
  // assign title
  socketEl.title = imageArray[randomIndex].name;
  // assign the alt
  socketEl.alt = imageArray[randomIndex].name;
  // increment times shown
  imageArray[randomIndex].timesShown++;
  // Replaces items in used image array
  imageUsed.shift();
  imageUsed.push(randomIndex);
}

function chartData(){
  for (var i=0; i<imageArray.length; i++){
    nameArray.push(imageArray[i].name);
    voteArray.push(imageArray[i].timesSelected);
  }
}


// Event handler
function handleImageSelection(event){
  console.log(event.target.alt);
  totalClicks++;

  for (var i=0; i < imageArray.length; i++) {
    if(event.target.alt === imageArray[i].name) {
      imageArray[i].timesSelected++;
    }
  }

  if (totalClicks < maxClicks) {
    showRandomImage(imageSelectionOne);
    showRandomImage(imageSelectionTwo);
    showRandomImage(imageSelectionThree);
  } else {
    chartData();
    drawChart();
  }
}

// Event listener
imageSelectionOne.addEventListener('click', handleImageSelection);
imageSelectionTwo.addEventListener('click', handleImageSelection);
imageSelectionThree.addEventListener('click', handleImageSelection);


// Function Calls
showRandomImage(imageSelectionOne);
showRandomImage(imageSelectionTwo);
showRandomImage(imageSelectionThree);


