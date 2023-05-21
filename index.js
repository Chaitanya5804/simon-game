var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

function startOver(){
    gamePattern = [];
    userClickedPattern = [];
    buttonColours = ["red", "blue", "green", "yellow"];
    level = 0;
}
  
$(document).keydown(function(){
    if(gamePattern==0)
    {
        $("h1").text("Level"+level);
        nextSequence();
    }
});

function nextSequence(){

    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel])
    {
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }   
    }
    else{
        var a = "wrong";
        playSound(a);
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over,Press Any Key to Restart");
        startOver();
    }
    
}

$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function playSound(name){

        var audio = new Audio(name+".mp3");
        audio.play();

}

function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

// select(randomChosenColour);

// function select(key)
// {
//     switch (key) {
//         case "yellow":
//             var audio = new Audio("sounds/yellow.mp3");
//             audio.play();
//             break;
//         case "green":
//             var audio = new Audio("sounds/green.mp3");
//             audio.play();
//             break;
//         case "red":
//             var audio = new Audio("sounds/red.mp3");
//             audio.play();
//             break;
//         case "blue":
//             var audio = new Audio("sounds/blue.mp3");
//             audio.play();
//             break;
    
//         default:
//             var audio = new Audio("sounds/wrong.mp3");
//             audio.play();
//             break;
//     }
// }


