import { zoomAnimation,rotateAnimation,shakingAnimation,breathingAnimation,introImgAnimation, introTextAnimation, slideOut} from './animation.js';

document.addEventListener("DOMContentLoaded", function() {

      const playButton = document.querySelector(".play");
      const inGameDiv = document.querySelector(".in-game");
      const image = document.querySelector(".cube");
      const content = document.querySelector(".content");
      const tooltip = document.querySelector(".tooltip");
      const catchTheFun = document.querySelector(".catch-the-fun");
      const spinGame = document.querySelector(".spin-game");
      const statusBar = document.querySelector(".status-bar");
      const result = document.querySelector(".result");
      const spinAmount = document.getElementById("spins");
      const point = document.querySelector("#point");
      const congrats = document.querySelector(".congrats");
      const failed = document.querySelector(".failed");

      let spins = spinAmount.innerHTML = 10 // initalize a value 0 to spin amount
      let money = 0; // Initialize money to 0
      point.innerHTML = money; // Set initial money value in UI

      // Function to trigger phase-out animation
      function phaseOut() {
        zoomAnimation(image);
        gsap.to([image, content, tooltip, catchTheFun], {
          opacity: 0,
          duration: 1,
          stagger: 0.1, 
          onComplete: function() {
            // hide first screen
            inGameDiv.classList.add("hide");
            setTimeout(function() {
            // show game screen 
              spinGame.classList.remove("hide");
              statusBar.classList.remove("hide");
            },50)
          }
        });
      }

      // Add click event listener to the play button and inGameDiv
      playButton.addEventListener("click", phaseOut);
      inGameDiv.addEventListener("click", phaseOut);

      // Call the animation functions
      rotateAnimation('.cube')
      breathingAnimation('.catch-the-fun')
      shakingAnimation('.tooltip h1')

      // function to roll dice
      function rollDice() {
        if (spins === 0) {
          document.getElementById("roll-button").disabled = true;
          document.getElementById("roll-button").classList.add("disabled");
          document.getElementById("roll-button").innerHTML = "Out of spins";
        } else {
          const dice = [...document.querySelectorAll(".die-list")];
          let total = 0;
          
          dice.forEach(die => {
            toggleClasses(die);
            const randomNumber = getRandomNumber(1, 6);
            die.dataset.roll = randomNumber;
            total += randomNumber;
          });
      
          setTimeout(() => {
            result.classList.remove("hide");
            const scoreRecord = document.querySelector(".result h2");
            scoreRecord.innerHTML = total + "k";
          }, 1400);
      
          // Update money by adding the total value of each spin
          money += total;
      
          // Update money displayed in UI
          setTimeout(() => {
            point.innerHTML = money;
          },1500)
         
          // Update spins value
          spins--;
          spinAmount.innerHTML = spins;
      
          if (spins === 0) {
            document.getElementById("roll-button").disabled = true;
            document.getElementById("roll-button").classList.add("disabled");
            document.getElementById("roll-button").innerHTML = "Out of spins";
            setTimeout(() => {

              switch (true) {
                // failed case
                case money < 50:

                  slideOut('.dice')
                  slideOut('.roll')
                  slideOut('.status-bar')

                  setTimeout(() => {
                    statusBar.classList.add("hide");
                    spinGame.classList.add("hide");
                    failed.classList.remove("hide");
                  },700)
                  
                  break;

                case money >= 50:
                
                  slideOut('.dice')
                  slideOut('.roll')
                  slideOut('.status-bar')

                  setTimeout(() => {
                    statusBar.classList.add("hide");
                    spinGame.classList.add("hide");
                    congrats.classList.remove("hide");
                    
                  },700)

                  setTimeout(introTextAnimation(".congrats .stars",), 1000);
                  setTimeout(introImgAnimation(".congrats .header"), 1000);

                 
                  const final_result = document.querySelector(".last_score h2");
                  final_result.innerHTML = money + "k";

                  break;
              }
            }, 1000);
            
          }
        }
      }
      
      function toggleClasses(die) {
        die.classList.toggle("odd-roll");
        die.classList.toggle("even-roll");
      }
      
      function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      document.getElementById("roll-button").addEventListener("click", rollDice);

    
});
