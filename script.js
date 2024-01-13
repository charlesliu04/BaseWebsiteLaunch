/*Birthday Calulations */
function calculateAge(birthDate) {
    const currentDate = new Date();
    const diffInMs = currentDate - birthDate;
    const ageInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    return ageInYears;
  }
  
  function updateAgeDisplay() {
  
    const birthDate = new Date('2004-12-21');
    const age = calculateAge(birthDate);
    document.getElementById('age').textContent = age.toFixed(9); 
  }
  
  
  setInterval(updateAgeDisplay, 16);;
  
/* Introduction Animation */
const typed = new Typed('#typed-text', {
  strings: ['{Che Liu}'],
  typeSpeed: 30,
  startDelay: 700, 
  loop: false,
  showCursor: true, // Make sure the cursor is shown
  cursorChar: '|', // Customize the cursor character if desired
  onComplete: (self) => {
    // Keep the cursor blinking after typing is finished and before the next phase of the animation
    setTimeout(() => {
      // Hide the cursor after the pause and before moving the text up
      self.cursor.style.display = 'none';

      // After typing is complete and pause is done, move the text up
      const introDiv = document.getElementById('animated-intro');
      introDiv.style.animation = 'moveUp 1s forwards';

      // When the move-up animation is complete, fade out the black overlay and show main content
      introDiv.addEventListener('animationend', () => {
        const overlay = document.getElementById('fullscreen-overlay');
        overlay.style.animation = 'fadeOut 1s forwards';

        // Wait for the fade-out to complete before showing the content
        overlay.addEventListener('animationend', () => {
          document.getElementById('main-content').style.display = 'block';
        });
      });
    }, 700); 
  }
});





//This is the drop down screen code 

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-word, .menu-word1, .menu-word2, .menu-word3').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();

      // Determine the content for the pop-up based on the clicked item
      const popupContent = determinePopupContent(item);
      document.getElementById('popup-content').innerHTML = popupContent;
      showPopup(); // Call the function to show the popup
    });
  });

  // Close Pop-Up Functionality
  document.getElementById('close-popup').addEventListener('click', closePopup);
});

// Close Pop-Up with Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePopup(); // Call the function to close the popup
  }
});



// Function to show the popup
function showPopup() {
  const popup = document.getElementById('popup-container');
  const popupContent = document.querySelector('.popup-content'); // changed from getElementById
  popup.classList.add('visible');
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById('popup-container');
  popup.classList.remove('visible');
}



function determinePopupContent(clickedItem) {
  let content;
  const text = clickedItem.innerText.trim().toLowerCase();
  switch (text) {


    case 'economics':
      content = '<p style="font-size: 18px;">Economics captivates me particularly for its blend of scientific rigor and psychological insight. It goes beyond numbers and graphs, delving into how human behavior, influenced by psychological biases and emotions, shapes economic decisions. This fusion offers a comprehensive view of how individual choices and societal trends intertwine. By integrating traditional economic analysis with the nuances of human psychology, it provides a unique lens to understand and predict the dynamic interplay of market forces, policy impacts, and cultural shifts. This multidisciplinary approach makes economics not just a study of markets but a profound exploration of human nature and societal evolution.</p>'
      + '<figure>'
      + '<img src="https://github.com/charlesliu04/BaseWebsiteLaunch/blob/main/citylandscape.jpg?raw=true" style="width:auto; max-width:200px; height:auto; display:block; margin:0 auto;">'
      + '<figcaption style="text-align:center; font-size:smaller; color:#cccccc; margin-top:8px;">New York City always reminds me of the economy.</figcaption>'
      + '</figure>';
      break;


    case 'accounting':
      content = '<p style="font-size: 18px;">I always percieved accounting as a dreadful monotonous subject. Yet, as I journeyed through my financial accounting class, a transformative realization dawned on me, akin to the lightbulb moment in cartoons: accounting is captivating. It might sound peculiar to some, but the allure of the numbers captivated me. The ability to dive into a companies backbone is like uncovering a hidden narrative, where every figure tells a part of a larger story about the company&apos;s performance, challenges, and potential.</p>'
      + '<figure>'
      + '<img src="https://github.com/charlesliu04/BaseWebsiteLaunch/blob/main/accounting.png?raw=true" style="width:auto; max-width:200px; height:auto; display:block; margin:0 auto;">'
      + '<figcaption style="text-align:center; font-size:smaller; color:#cccccc; margin-top:8px;"></figcaption>'
      + '</figure>';
      break;


      case 'lifelong learner':
        content = '<p style="font-size: 18px;">I consider myself a dedicated lifelong learner, a trait I believe everyone should aspire to embody. While perfection may be an elusive goal, the journey towards it is transformative, constantly pushing us to evolve and improve. My commitment to becoming the best version of myself is rooted in a strive for knowledge, encompassing a wide array of subjects and skills. This curiosity led me to take on the challenge of coding my own website, a testament to my belief in continuous learning and self-growth.</p>'
          + '<figure>'  
          + '<img src="https://github.com/charlesliu04/BaseWebsiteLaunch/blob/main/reading.jpg?raw=true" style="width:auto; max-width:200px; height:auto; display:block; margin:0 auto;">'
         + '<figcaption style="text-align:center; font-size:smaller; color:#cccccc; margin-top:8px;"> I read whenever I can. However, I&apos;ve recently shifted from solely consuming knowledge through reading to also producing, by writing, aligning with my newfound philosophy of balancing intake with output to add more value to society.</figcaption>'
          + '</figure>';
        break;  
      
   
    default:
      content = '<p style="font-size: 18px;">I see discipline as the pinnacle of self-respect and self-love, embodying the strength to prioritize long-term rewards over immediate desires. It showcases the depth of commitment to one&apos;s dreams, even on the most challenging days. I not only practice discipline but also advocate for its importance. My commitment to this principle has led me to be chosen as a speaker for Leadership Day at Boston College, where I will share insights on the vital role of discipline in effective leadership.</p>'
      + '<figure>'
      + '<img src="https://github.com/charlesliu04/BaseWebsiteLaunch/blob/main/running.jpg?raw=true" style="width:auto; max-width:200px; height:auto; display:block; margin:0 auto;">'
      + '<figcaption style="text-align:center; font-size:smaller; color:#cccccc; margin-top:8px;">Rainy day Boston Marathon Run</figcaption>'
      + '</figure>';
 
}
return content;
}

   


   
