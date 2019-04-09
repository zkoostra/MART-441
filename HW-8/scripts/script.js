let pineappleArray = new Array();
let textArray = new Array();
let boxArray = new Array();
class Images {
  constructor(w, h, path) {
    this.w = w;
    this.h = h;
    this.path = path;
  }
  get width() {
    return this.w;
  }
  get height() {
    return this.h;
  }
  get thePath() {
    return this.path;
  }
}

class Text {
  constructor(message) {
    this.message = message;
  }
  get messages() {
    return this.message;
  }
}

// class Box {
//   constructor(w, h, fill) {
//     this.w = w;
//     this.h = h;
//     this.fill = fill;
//   }
//
//   get boxes(){
//     return this.box;
//   }
// }

//adding pineapple images to the pinappleArray
function addPineapples() {
  let pineappleImage1 = new Images(400, 400, "images/pineapple-1.jpg");
  let pineappleImage2 = new Images(400, 400, "images/pineapple-2.jpg");
  pineappleArray.push(pineappleImage1);
  pineappleArray.push(pineappleImage2);
}

//adding text to the text array
function addText() {
  let message1 = new Text("Are you a fruit?");
  let message2 = new Text("Because baby, you look like a fineapple!");

  textArray.push(message1);
  textArray.push(message2);

}




//connect the image path as shown in the array w the jquery object that is the pineapple image
$(document).ready(function() {
  addPineapples();
  addText();
  $('#pineapple1').attr("src", pineappleArray[0].thePath);
  $('.plainText').text(textArray[0].messages);

  //when the image is clicked, fade out first image and replace with the second one.
  $("#pineapple1").click(function() {
    $("#pineapple1").fadeOut(1000, changeImage);
     $('.plainText').fadeOut(1000, changeText);
     $('#box1').animate({left:"+50"}), 1000;
  });

  //function that resets the path of the pineapple image 1 jquery object so it corresponds with the  actual image and path for the second pineapple photoLocation, then fades it back in.
  function changeImage() {
    $('#pineapple1').attr("src", pineappleArray[1].thePath);
    $("#pineapple1").fadeIn(1000);

  }

//Replace Old, Boring text with Fun compliment text!! It seems like it's appearing really fast ie not fading in in one second but idk why that is.
  function changeText(){
    $('.coolText').text(textArray[1].messages);
    $('.coolText').fadeIn(1000);
  }

//
  function moveFirstBox(){
  $("#box1").animate({left:250}).animate({left:800});
    }
});
