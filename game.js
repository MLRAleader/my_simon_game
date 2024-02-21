var tabColour = ["green", "red", "yellow", "blue"];
var tabPossibleUserChoiceColour = $(".btn");
var level = 0;
var tabSelectedRandomColour = [];
var tabUserSelectedColour = [];
var gameStarted = false;
gameStarter();
function gameStarter() {
 
  if (!gameStarted) {
    gameStarted = true;
    $(document).one("keypress", function () {
      initGame();
      gameStarted = false;
    });
  }
}
function initGame() {
  changeBodyColour();
  initScoreToZero();
  generateAndExtendSequence();
  userSelectingColour();
  
}

function generateRandomColour() {
  var randomNumber = Math.floor(Math.random() * 4);
  return tabColour[randomNumber];
}

function selectRandomColour(randomColour) {
  return $("#" + randomColour);
}

function changeDisplayEffectRandomSelectedColour(selectedRandomColourId) {
  $("#" + selectedRandomColourId).addClass("pressed");
  setTimeout(function () {
    $("#" + selectedRandomColourId).removeClass("pressed");
  }, 100);
}

function playColourSound(selectedRandomColourId) {
  var selectedColourSound = new Audio("sounds/" + selectedRandomColourId + ".mp3");
  selectedColourSound.play();
}

function userPlaying(event) {
  var selectedRandomColourId = tabSelectedRandomColour[tabUserSelectedColour.length];
  var userSelectedColourId = $(event.target).attr("id");

  if (userSelectedColourId === selectedRandomColourId) {
    tabUserSelectedColour.push(userSelectedColourId);
    changeDisplayEffectRandomSelectedColour(userSelectedColourId);
    playColourSound(userSelectedColourId);
    if (tabUserSelectedColour.length === tabSelectedRandomColour.length) {
      level++;
      changeScore();
      setTimeout(generateAndExtendSequence, 800);
    }
  } else {
    displayMessage("Game Over, Press Any Key to Restart");
    wrongChoice();
    resetGame();
  }
}

function userSelectingColour() {
  tabPossibleUserChoiceColour.off("click"); 
  tabPossibleUserChoiceColour.on("click", userPlaying);
}

function generateAndExtendSequence() {
  var newRandomColour = generateRandomColour();
  tabSelectedRandomColour.push(newRandomColour);
  displayMessage("Level " + level);
  setTimeout(function () {
    for (var i = 0; i < tabSelectedRandomColour.length; i++) {
      (function (i) {
        setTimeout(function () {
          var colorId = tabSelectedRandomColour[i];
          changeDisplayEffectRandomSelectedColour(colorId);
          playColourSound(colorId);
        }, i * 900);
      })(i);
    }
    tabUserSelectedColour = [];
  }, 1000);
}

function displayMessage(message) {
  $("#level-title").text(message);
}

function changeScore() {
  $("#level-title").text("Level " + level);
}

function initScoreToZero() {
  level = 0;
  changeScore();
}
function wrongChoice() {
  $("body").css("background-color", "red");
  var wrongSound = new Audio("sounds/wrong.mp3");
  wrongSound.play();
}
function changeBodyColour() {
  $("body").css("background-color", "#011F3F");
}
function resetGame() {
  tabSelectedRandomColour = [];
  tabUserSelectedColour = [];
  gameStarter();
}
