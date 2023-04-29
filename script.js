const colorBlocks = document.querySelectorAll('.color-block');

colorBlocks.forEach(colorBlock => {
  colorBlock.addEventListener('click', () => {
    
    const colorCode = colorBlock.getAttribute('data-color');

    navigator.clipboard.writeText(colorCode);

    const telegramSound = new Audio('telegram.mp3');
    telegramSound.play();
    telegramSound.play();
  
    const copyMessage = document.querySelector('.copy-message');
    copyMessage.classList.add('show');
  
    setTimeout(() => {
      copyMessage.classList.remove('show');
    }, 2000);
  });
});
