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

var coverArray = []
$(document).ready(function () {
  $('.tooltip').tooltipster();
//when the button is clicked, load kaimin cover story data
$("button").click(function(){
  console.log("test")
  $.getJSON("Data/Kaimin-Issues.json", function(result){
    //console.log(result.issues[0].issueNumber)
    //for every entry of "issue" in json doc, create a new newspaper object and fill in it's constructors with the json attributes
    for (var i = 0; i<result.issues.length; i++){
      coverArray.push(new Newspaper(result.issues[i].issueNumber,result.issues[i].storyTitle, result.issues[i].date, result.issues[i].photoLocation, result.issues[i].involvement, result.issues[i].link));
    }

//make a table to put all the stuff in. I'm sure I could explain how the for loop is creating a table but I would rather die.
    var coverDisplay = "<table>";
    var prevNumber = 3;
    //console.log(coverArray.length)
    for (var i =0; i<coverArray.length; i++){
      console.log(0 % 4)

      if(i % 4 == 0){
        coverDisplay = coverDisplay + "<tr>";
      }
      coverDisplay = coverDisplay+"<td><table><tr><td>" + coverArray[i].issue + " " + coverArray[i].title + "</td> </tr> <tr><td><img class = tooltip title = '" + coverArray[i].myRole+ "' width = 300 height = 300 src ='" + coverArray[i].photo + " ' > </td></tr> </table></td>";
      if(i == prevNumber){
        coverDisplay = coverDisplay + "</tr>";
        prevNumber = prevNumber + 4;
      }
      // + coverArray[i].theDate +"</td><td>"+coverArray[i].myRole+"</td><td>"+coverArray[i].url+"</td></tr>";
console.log(coverDisplay)
    }

    coverDisplay = coverDisplay+"</table>";
    $("div").html(coverDisplay);
  });
  });
  });
