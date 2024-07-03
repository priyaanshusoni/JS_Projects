const button = document.querySelector('button');



button.addEventListener('click', () => {
  const diceNumber =  (Math.floor(Math.random() * 6))+1;
  console.log(diceNumber);
  document.querySelector("#result").innerHTML = diceNumber;








  const images = document.querySelector("#img");
  images.src = `${diceNumber}.png`;
  images.style.display = 'block'; // Make sure the image is visible

});



