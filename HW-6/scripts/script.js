// create an array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
// create a variable with the blank image name. Wow I am so creative.
var blankImagePath = "images/blank.jpg";

//JSON creation
var player = {
  "firstname": "",
  "lastname": "",
  "age": ""
};


//Create variables to keep count on how many times an image has been added/if they match
var firstNumber = -1;
var secondNumber = -1;

//Create variables to count how many attempts it takes to match cards
var wrongMatch = 0
var rightMatch = 0
var totalTries

// create a empty array for the actual images, remember this is where we'll push images later. At the top so it's a universal variable.
var actualImages = new Array();

function printBlanks() {
  // call our random image creation function
  createRandomImageArray();
  // create a for loop: this will generate as many images as there are in the image.Tags array from the beginning (so right now, 10)
  for (var i = 0; i < imageTags.length; i++) {
    // iterate through the image tag ids and sets the source. This makes them all the same image (for now!)
    document.getElementById(imageTags[i]).src = blankImagePath;
  }
}



function createRandomImageArray() {
  // create an array of actual images. I should have named them better things but oh wellsies.
  var actualImagePath = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];
  // create another array to make sure the images only get added twice. There are 5 spots w/ 0 in each of them because each image should get added 2 times to make 10.
  var count = [0, 0, 0, 0, 0];
  // create a while statement to check to see if our actual image array is full. This number needs to be 10 instead of 5 because each image goes in twice.
  while (actualImages.length < 10) {
    // get a random number between 0 and the total number of images that we can choose from. This one has to be 5 bc there are only 5 DIFFERENT images. This is what ensures that they go into the display in a random order
    var randomNumber = Math.floor(Math.random() * actualImagePath.length)

    // create an if statement that says if the total number added is less than 2, then add the image to the actual image array.
    if (count[randomNumber] < 2) {
      actualImages.push(actualImagePath[randomNumber]);
      // then add one to the array to make sure only two of the same images can be added
      count[randomNumber] = count[randomNumber] + 1;
    }
  }

}

function flipImage(number) {

  // This checks to see if the image has been flipped.. right?
  if (firstNumber >= 0) {
    secondNumber = number;
    document.getElementById(imageTags[number]).src = actualImages[secondNumber];

  } else if (firstNumber < 0) // If the first number is less than 0, that means an additional image needs to be added.
  {
    firstNumber = number;
    document.getElementById(imageTags[firstNumber]).src = actualImages[firstNumber];

  }

  // We check to see if the images DONT match first, and if not, they disappear.
  if (actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
    setTimeout(imagesDisappear, 1000); // calls a method after 1 second, this just makes the card show up for a timed period.

    //Ooh Zoie, you're so smart. This increases the count everytime a pair of cards doesn't match
    wrongMatch++
    //  console.log(wrongMatch)
  }
  // I'll be honest I don't 100% understand how this checks to see if the images match. I *think* it's just saying like are the images literally the same like the same place in the array or the same file path and do the "numbers" that symbolize the number of times they've been added to the table match... right?
  else if (actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
    firstNumber = -1;
    secondNumber = -1;
    //This increases by one everytime a pair of cards does match. I tried to use the same variable for these two but something wasn't working right so I had to make it be two.
    rightMatch++
    //  console.log(rightMatch);
  }

if (rightMatch==5)
{
  window.location="final.html"
}


  function imagesDisappear() {
    //console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
  }

  // add to the JSON from the textboxes
  function addToPlayer() {
    var firstName = document.getElementById("txtFirstName").value;
    //console.log(firstName);
    player.firstname = firstName;
    var lastName = document.getElementById("txtLastName").value;
    player.lastname = lastName;
    var age = document.getElementById("txtAge").value;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "Game.html";

  }

  // get the information out of JSON
  function playerInfo() {
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
    console.log(player.lastname);
    console.log(player.age);

    console.log("rightMatch" + "wrongMatch")
  }
}
