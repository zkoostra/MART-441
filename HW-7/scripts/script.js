let myViewFinderArray = new Array();
let myViewFinder0

class ViewFinder {
  constructor(title, picture, description, author, year) {
    this.title = title;
    // this.picture = picture;
    // this.description = description;
    // this.author = author;
    // this.year = year;
  }
  get theTitle()
  {
      return this.title;
  }

}

//create 5 viewfinder objects, put information in them, push them to an array
function initializeArray()
{
    myViewFinder0 = new ViewFinder("404 Clery Compliance");
    myViewFinderArray.push(myViewFinder0);
    //myViewFinderArray.push(myViewFinder1);

  }

  function accessInfo()
  {
      /// random object from the array
      document.getElementById("title").innerHTML = myViewFinderArray[0].toString();


  }
