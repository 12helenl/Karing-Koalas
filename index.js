var button = $("button");

var supportiveMessages = ["Hello", "there", "mate"]

// add more later

var stepOne = Math.random()

var random = stepOne *3
var final = Math.floor(random)


console.log(final);


var kindness = supportiveMessages[final]

console.log(kindness);

var header = $ ('h2');

header.text(kindness);

button.on("click",doSomething);

function doSomething(){
  var stepOne = Math.random()

  var random = stepOne *3
  var final = Math.floor(random)
  console.log(final);


  var kindness = supportiveMessages[final]

  console.log(kindness);

  var header = $ ('h2');

  header.text(kindness);

  button.on("click",doSomething);

}
