document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById('button');
  const limit = document.getElementById('limit');

  //call function to set random location
function randomPosition(){
  const width = limit.offsetWidth;
  const height = limit.offsetHeight;

  const randomLeft = Math.floor(Math.random() * (width - button.offsetWidth));
  const randomTop = Math.floor(Math.random() * (height - button.offsetHeight));

  button.style.left = randomLeft + 'px';
  button.style.top = randomTop + 'px';
}

button.addEventListener('click', randomPosition);
});