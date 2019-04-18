let graphicsObjectsArray =  []
let count = 0
class BeautifulGraphics {
  constructor(title, picture, description, author, year) {
    this.picture = picture;
    this.title = title;
    this.description = description;
    this.author = "Zoie";
    this.year = year;
  }

  //sets up the functions that will allow me to display the class information inside the array
    toStringPicture()
  {
      return this.picture;
  }

  toStringTitle()
  {
      return "Title: " + this.title;
  }

  toStringDescription()
  {
      return "Description: " + this.description;
  }

  toStringAuthor()
  {
      return "Author: " + this.author;
  }

  toStringYear()
  {
      return "Year: " + this.year;
  }

}

//create empty array to push graphics into once they're randomly selected
let graphicsArray = []

//create 5 viewfinder objects, put information in them
function makeObjects()
{
  let beautifulGraphic0 = new BeautifulGraphics("404 Clery Compliance", "Images/image-1.jpg", "Graphic announcing UM's non-compliance with the Clery Act", "Zoie", "2018");
let beautifulGraphic1 = new BeautifulGraphics("Surfing Monte", "Images/image-2.jpg", "Graphic made to discuss UM's issues with internet connectivity", "Zoie", "2018");
let beautifulGraphic2 = new BeautifulGraphics("John Harbor as Patrick Star", "Images/image-3.jpg", "Meme version of John Harbor showing how more classes will be put online.", "Zoie", "2018");
let beautifulGraphic3 = new BeautifulGraphics("GLI Dropouts", "Images/image-4.jpg", "Frenchie from Grease gives informaton about the rate at which UM students drop out of GLI.", "Zoie", "2018");
let beautifulGraphic4 = new BeautifulGraphics("Dumpster Diving", "Images/image-5.jpg", "Made for editorial about lack of good food options on campus.", "Zoie", "2018");
graphicsArray.push(beautifulGraphic0);
graphicsArray.push(beautifulGraphic1);
graphicsArray.push(beautifulGraphic2);
graphicsArray.push(beautifulGraphic3);
graphicsArray.push(beautifulGraphic4);
  }



//This is basically the same code from last week w names and paramters changed
    // function makeArray() {
    // graphicsObjectsArray = ["beautifulGraphic0", "beautifulGraphic1", "beautifulGraphic2", "beautifulGraphic3", "beautifulGraphic4"];
    //   let count = [0, 0, 0, 0, 0];
    //   while (graphicsArray.length < 5) {
    //       graphicsArray.push(graphicsObjectsArray[i]);
    //
    //     }
    //   }


    function accessInfo()
{
  //var randomNumber = Math.floor(Math.random(5));
  var randomNumber = Math.floor(Math.random() * graphicsObjectsArray.length)
  if (count[randomNumber] < 1) {
    graphicsArray.push(graphicsObjectsArray[randomNumber]);
    count[randomNumber] = count[randomNumber] + 1;
  }

 document.getElementById("title").innerHTML = graphicsArray[randomNumber].toStringTitle();
 document.getElementById("author").innerHTML = graphicsArray[randomNumber].toStringAuthor();
 document.getElementById("year").innerHTML = graphicsArray[randomNumber].toStringYear();
 document.getElementById("description").innerHTML = graphicsArray[randomNumber].toStringDescription();
 document.getElementById("this.picture").src = graphicsArray[randomNumber].toStringPicture();

}
