let pineappleSelector = "#pineapple1";
let pineApples = new Array();
class PineappleInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{
    var pineapple = new PineappleInfo("#pineapple1", "images/pineapple-1.jpg");
    pineApples.push(pineapple1);

}
$(document).ready(function(){
    console.log(pineApples[0].toString());
    console.log(pineApples[0].theSelector);
    console.log(pineApples[0].theImagePath);

    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(pineApples[0].theSelector).attr("src", pineApples[0].theImagePath);


          setInterval($(pineApples[0].theSelector).fadeOut().fadeIn();, 1000);

       //$(pineApples[0].theSelector).fadeOut().fadeIn();

       showText(){
         $(plainText).fadeIn
       }

});




// function moveSquare()
// {
//     $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
// }
