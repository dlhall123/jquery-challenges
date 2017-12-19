/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the   shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){
  
  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){
    //set up variables
    let teamOneShootButton = $('#teamone-shoot');
    let teamTwoShootButton = $('#teamtwo-shoot');
    let teamOneShotsTaken = parseInt($('#teamone-numshots').html());
    let teamOneGoals = parseInt($('#teamone-numhits').html());
    let teamTwoShotsTaken = parseInt($('#teamtwo-numshots').html());
    let teamTwoGoals = parseInt($('#teamtwo-numhits').html());
    let numResets = parseInt($('#num-resets').html());
    let scoreSound = new Audio('assets/audio/shoot.mp3');
    //function to get a random number 0 or 1 to determine if a goal or not
    function getRandomInt() {
      min = Math.ceil(0);
      max = Math.floor(1);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    //Team one shoot action
    teamOneShootButton.click(function(){
      $('body').css('background-color', 'white');
      let teamOneGoalScored = getRandomInt();
      $('#teamone-numshots').html(teamOneShotsTaken += 1);
      $('#teamone-numhits').html(teamOneGoals += teamOneGoalScored);
      if(teamOneGoalScored == 1){
        scoreSound.play();
        $('body').css('background-color', 'gold');
      }
    
    })

    //Team one shoot action
    teamTwoShootButton.click(function () {
      $('body').css('background-color', 'white');
      let teamTwoGoalScored = getRandomInt();
      $('#teamtwo-numshots').html(teamTwoShotsTaken += 1);
      $('#teamtwo-numhits').html(teamTwoGoals += teamTwoGoalScored);
      if (teamTwoGoalScored == 1) {
        scoreSound.play();
        $('body').css('background-color', 'green');
      }

    })

    //Reset button
    $('#reset').click(function () {
      $('body').css('background-color', 'white');
      $('#num-resets').html(numResets += 1);
      $('#teamone-numshots').html(teamOneShotsTaken = 0);
      $('#teamone-numhits').html(teamOneGoals = 0);
      $('#teamtwo-numshots').html(teamTwoShotsTaken = 0);
      $('#teamtwo-numhits').html(teamTwoGoals = 0);

  })
})

})()
