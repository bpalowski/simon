import { hello } from './memory';
import { userGuess } from './memory';
import { userOutput } from './memory';


$(document).ready(function() {
  $('#redColor').submit(function(event) {
    event.preventDefault();
    var red = $("input:radio[name=red]:checked").val();
    userGuess(red);
    userOutput()

  });
  $('#blueColor').submit(function(event) {
    event.preventDefault();
    var blue = $("input:radio[name=blue]:checked").val();
    userGuess(blue);
    userOutput()

  });
  $('#greenColor').submit(function(event) {
    event.preventDefault();
    var green = $("input:radio[name=green]:checked").val();
    userGuess(green);
    userOutput()

  });
  $('#yellowColor').submit(function(event) {
    event.preventDefault();
    var yellow = $("input:radio[name=yellow]:checked").val();
    userGuess(yellow);
    userOutput()

  });

});

hello();
var userInput = [];
