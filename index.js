
const guess = ()=>{
  var guess = 1000000000
  var score = 0;
  var level = 1;
  var lower = 1;
  var higher = 2;
  while(guess != 0){  
    var ans =  Math.floor(Math.random()*higher)+1
    console.log(ans)
    guess = prompt(`Enter a number btw ${lower} and ${higher}. Enter 0 to quit.`)
    if (guess == ans){
      score += 1
      higher += 1
    }
  }
}

guess()
