
//okay!! I did the really basic ass entry method! And it works!!
$(document).ready(function () {
           $("button").click(function () {
               $("#spaceForSpace").load("data/ppl_in_space.json", function(responseText){
                   var spacePeople = JSON.parse(responseText);
                   $("#spaceForSpace").html("Craft" + message.number.people.craft
               + "<br>Name" + message.number.people.name + "<br> Gender" + message.number.people.gender );
               });
           });
       });
