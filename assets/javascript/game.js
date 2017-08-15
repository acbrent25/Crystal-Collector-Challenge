

var wins = 0;
var losses = 0;
var targetNumber = 0;
var yourScore = 0;
var crystalVals;
var crystalVal;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;



$(document).ready(function() { 
   

        // Generate random target number on page load and print to target
    function startGame() {
            
             reset();

        // Generate Random Number for Target Number
        targetNumber = Math.floor(Math.random() * 120) + 19 ;
            
            targetNumber = parseInt(targetNumber);
            console.log(targetNumber);

            // Print to Target Placeholder
            $("#target-number").text(targetNumber);
            
            // Print to Score Placeholder
            $("#your-score").text(yourScore);
            

            // Each crystal gets a random value 

                for (var i = 1; i < 5; i++) {
                    crystalVal = [Math.floor(Math.random() * 12) + 1] ;
                    console.log("crystalVal = " + crystalVal);

                    // Push random CrystalVal into Crystal Vals array
                    crystalVals.push(crystalVal);
                    console.log("crystalVals = " + crystalVals);

                }

    } //. Start Game Function 


                // When Clicking Crystal One Assign Value of CrysalVals[0]
                $(".crystal1").on("click", function() {
                    
                    crystalOne = parseInt(crystalVals[0]);
                    yourScore += crystalOne;
                    console.log("crystalOne = " + crystalOne);
                    console.log("yourScore = " + yourScore);
                    $("#your-score").text(yourScore);
                    winLoss();

                });

                

                $(".crystal2").on("click", function() {
                    
                    crystalTwo = parseInt(crystalVals[1]);
                    yourScore += crystalTwo;
                    console.log("yourScore = " + yourScore);
                    $("#your-score").text(yourScore);
                    winLoss();
                });

                $(".crystal3").on("click", function() {
                    
                    crystalThree = parseInt(crystalVals[2]);
                    yourScore += crystalThree;
                    console.log("yourScore = " + yourScore);
                    $("#your-score").text(yourScore);
                    winLoss();

                });

                $(".crystal4").on("click", function() {
                    
                    crystalFour = parseInt(crystalVals[3]);
                    yourScore += crystalFour;
                    console.log("yourScore = " + yourScore);
                    $("#your-score").text(yourScore);
                    winLoss();

                });

                 // Reset score and crystals   
                function reset() {
                    yourScore = 0; 
                    crystalVals = [];
                    crystalVal = 0;
                }



                // Records wins and losses
                function winLoss() {
                    if (yourScore === targetNumber) {
                        wins++
                        $("#win-ct").text(wins);
                        
                        startGame();
                    } else if (yourScore > targetNumber) {
                        losses++
                        $("#loss-ct").text(losses);
                        
                        startGame();
                    }  
                } 



    startGame();

}); //. Document Ready