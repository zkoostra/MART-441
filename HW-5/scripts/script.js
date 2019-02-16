// create an array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
// create a variable with the blank image name. Wow I am so creative.
var blankImagePath = "images/blank.jpg";
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
    // get a random number between 0 and the number total number of images that we can choose from. This one has to be 5 bc there are only 5 DIFFERENT images. This is what ensures that they go into the display in a random order
    var randomNumber = Math.floor(Math.random() * actualImagePath.length)

    // create an if statement that says if the total number added is less than 2, then add the image to the actual image array.
    if (count[randomNumber] < 2) {
      actualImages.push(actualImagePath[randomNumber]);
      // then add one to the array that makes sure only two images can be added
      count[randomNumber] = count[randomNumber] + 1;
    }
  }

}

function flipImage(number) {
  //This function and the notes were SO helpful for me bc it's actually REALLY simple if you look at this but I feel like I never would have gotten this function on my own. Now that I see it, it literally makes so much sense.
  document.getElementById(imageTags[number]).src = actualImages[number];
  // this should be a quick function that just changes the image based on what number was pressed




}
