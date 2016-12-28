

function randomize() {
  var dieOne = document.getElementById('dieOne');
  var dieTwo = document.getElementById('dieTwo');
  var dieThree = document.getElementById('dieThree');
  var dieFour = document.getElementById('dieFour');
  var dieFive = document.getElementById('dieFive');

  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var d3 = Math.floor(Math.random() * 6) + 1;
  var d4 = Math.floor(Math.random() * 6) + 1;
  var d5 = Math.floor(Math.random() * 6) + 1;
  console.log(d1);

  dieOne.innerHTML = d1;
  dieTwo.innerHTML = d2;
  dieThree.innerHTML = d3;
  dieFour.innerHTML = d4;
  dieFive.innerHTML = d5;

}
function firstDie() {
  var needsAname = document.getElementById('dieSix');
  var d6 = Math.floor(Math.random() * 6) + 1;
  dieSix.innerHTML = d6;
}

firstDie();
randomize();
