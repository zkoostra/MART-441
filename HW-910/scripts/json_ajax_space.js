
//I wound up trying two super different thinks to try and think out this problem so this is way #1 but LOL it does not work.
class People {
  constructor(craft, name, gender){
    this.craft = craft
    this.name = name
    this.gender = gender
  }

  get craft(){
    //so this is where I link the data and the class but I'm not sure how
  }
  get name(){
    //so this is where I link the data and the class but I'm not sure how
  }

  get gender(){
    //so this is where I link the data and the class but I'm not sure how
  }

  $(document).ready(function(){
  //I'm assuming this should be inside the constructor but I don't know if that's right or if I even need to do this if I have something to get the data in the get functions
  $("button").click(function(){
  $.getJSON("data/ppl_in_space.json", function(result){
  $.each(result, function(i, field){
  $("div").append(field + " ");
  });
  });
  });
  });



}
