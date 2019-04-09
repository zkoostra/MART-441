
//I wound up trying two super different thinks to try and think out this problem so this is way #1 but LOL it does not work.
class Person {
  constructor(craft, name, gender){
    this.craft = craft
    this.name = name
    this.gender = gender
  }

  get station(){
    return this.craft
  }
  get person(){
    return this.name
  }

  get theGender(){
    return this.gender
  }


}

let peopleArray = []


$(document).ready(function(){  window.alert("test")
//I'm assuming this should be inside the constructor but I don't know if that's right or if I even need to do this if I have something to get the data in the get functions
$("button").click(function(){
    window.alert("test")
$.getJSON("data/ppl_in_space.json", function(result){
    window.alert("test")
//$.each(result, function(makePeople){
  for (var i = 0; i<result.people.length; i++){
    peopleArray.push(new Person(result.people[i].craft,result.people[i].name, result.people[i].gender))
      window.alert("test")
  }

var theFinalStuff = "<table>"
for (var i =0; i<peopleArray.length; i++){
  theFinalStuff = theFinalStuff+"<tr><td>"+peopleArray[i].person +"</td> <td>"+peopleArray[i].station + "</td> <td>" + peopleArray[i].theGender +"</td></tr>"

}
theFinalStuff = theFinalStuff +"</table>"

$("div").html(theFinalStuff)
});
});
});
