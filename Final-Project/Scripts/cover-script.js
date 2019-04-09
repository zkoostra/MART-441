class Newspaper{
  constructor(issueNumber, storyTitle, date, photoLocation, involvement,link){
    this.issueNumber = issueNumber;
    this.storyTitle = storyTitle;
    this.date = date;
    this.photoLocation = photoLocation;
    this.involvement = involvement;
    this.link = link;
  }

  get issue(){
    return this.issueNumber;
  }

  get title(){
    return this.storyTitle;
  }

  get theDate(){
    return this.date;
  }

  get photo(){
    return this.photoLocation;
  }

  get myRole(){
    return this.involvement;
  }

  get url(){
    return this.link;
  }
}

let coverArray = []

//when the button is clicked, load kaimin cover story data
$("button").click(function(){
  $.getJSON("data/Kaimin-Issues.json", function(result){
    //for every entry of "issue" in json doc, create a new newspaper object and fill in it's constructors with the json attributes
    for (var i = 0; i<result.issues.length; i++){
      coverArray.push(new Newspaper(result.issues[i].issueNumber,result.issues[i].storyTitle, result.issues[i].theDate, result.issues[i].photoLocation, result.issues[i].involvement, result.issues[i].link))
    }

//make a table to put all the stuff in. I'm sure I could explain how the for loop is creating a table but I would rather die.
    var coverDisplay = "<table>"
    for (var i =0; i<coverArray.length; i++){
      coverDisplay = coverDisplay+"<tr><td>"+coverArray[i].issues +"</td> <td>"+coverArray[i].issueNumber + "</td> <td>" + coverArray[i].theDate +"</td><td>"+coverArray[i].involvement+"</td><td>"+coveryArray[i].link+"</td></tr>"

    }

    coverDisplay = coverDisplay+"</table"
    $("div").html(coverDisplay);
  });
  });
  });
