const typed = new Typed('#typed-text', {
    strings: ['{Action - Che Liu}'],
    typeSpeed: 30,
    startDelay: 800, 
    loop: false,
    showCursor: true, 
    cursorChar: '|', 
    onComplete: (self) => {
      
      setTimeout(() => {
        
        self.cursor.style.display = 'none';
  
        const introDiv = document.getElementById('animated-intro');
        introDiv.style.animation = 'moveUp 1s forwards';
  
        introDiv.addEventListener('animationend', () => {
          const overlay = document.getElementById('fullscreen-overlay');
          overlay.style.animation = 'fadeOut 1s forwards';
  
          overlay.addEventListener('animationend', () => {
       
          });
        });
      }, 700); 
    }
  });
  
