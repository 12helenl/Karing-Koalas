var button = $("button");

var supportiveMessages = ["You are the most perfect you there is", "You are enough", "You make a bigger impact than you realize","Nothing can stop you","You are stunning","You deserve as much love and affection as anyone else","You are not alone"];
// add more later

var stepOne = Math.random()

var random = stepOne *7
var final = Math.floor(random)


console.log(final);


var kindness = supportiveMessages[final]

console.log(kindness);

var header = $ ('h2');

button.on("click",doSomething);

function doSomething(){
  var stepOne = Math.random()

  var random = stepOne *7
  var final = Math.floor(random)
  console.log(final);


  var kindness = supportiveMessages[final]

  console.log(kindness);

  var header = $ ('h2');

  header.text(kindness);

  button.on("click",doSomething);

}
