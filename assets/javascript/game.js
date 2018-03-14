// scorboard variables
var wins = 0;
var losses = 0;
var userTally = 0;
$(document).ready(function(){
// Random number to reach between 19-120
var Goal=Math.floor(Math.random()*101+19)
//append to goalbox element in html
$('#goal').text(Goal);
// generate random numbers for each crystal between 1-12
var GreenCrystal= Math.floor(Math.random()*11+1)
var PurpleCrystal= Math.floor(Math.random()*11+1)
var OrangeCrystal= Math.floor(Math.random()*11+1)
var BlueCrystal= Math.floor(Math.random()*11+1)
// append number of wins and losses into html
$('#wins').text(wins);
$('#losses').text(losses);
// reset the game when a win or loss is recorded
function reset(){
  Goal=Math.floor(Math.random()*101+19);
    console.log(Goal)
  // reset goal box
$('#goal').text(Goal);
// reset crystal values
GreenCrystal= Math.floor(Math.random()*11+1)
PurpleCrystal= Math.floor(Math.random()*11+1)
OrangeCrystal= Math.floor(Math.random()*11+1)
BlueCrystal= Math.floor(Math.random()*11+1)
userTally= 0;
// reset tally
$('#score').text(userTally);
}
// record Win scenario
function gameWin(){
  wins++;
  $('#wins').text(wins);
  reset();
}
// record loss scenario
function gameLoss(){
losses++;
$('#losses').text(losses);
reset();
}
// enable clicks on crystals
$('#GreenCrystal').on ('click', function(){
  userTally = userTally + GreenCrystal;
  console.log("New userTally= " + userTally);
  $('#score').text(userTally);
        //create win/lose scenario
      if (userTally == Goal){
        gameWin();
      }
      else if ( userTally > Goal){
        gameLoss();
      }
})
$('#PurpleCrystal').on ('click', function(){
    userTally = userTally + PurpleCrystal;
    console.log("New userTally= " + userTally);
    $('#score').text(userTally);
          //create win/lose scenario
        if (userTally == Goal){
          gameWin();
        }
        else if (userTally > Goal){
          gameLoss();
        }
  })
$('#OrangeCrystal').on ('click', function(){
    userTally = userTally + OrangeCrystal;
    console.log("New userTally= " + userTally);
    $('#score').text(userTally);
          //create win/lose scenario
        if (userTally == Goal){
          gameWin();
        }
        else if (userTally > Goal){
          gameLoss();
        }
    })
  $('#BlueCrystal').on ('click', function(){
      userTally = userTally + BlueCrystal;
      console.log("New userTally= " + userTally);
      $('#score').text(userTally);
            //create win/lose scenario
          if (userTally == Goal){
            gameWin();
          }
          else if (userTally > Goal){
            gameLoss();
          }
      });
});
