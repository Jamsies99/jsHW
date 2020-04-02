
function stringCompare (){
  var str1 ="bob";
  var str2 ="bob";
  if (str1 == str2){
  alert("These strings are identical!");
  }
  else{
  alert("These strings are not identical");
  }
}

function numberCompare (){
  var numb = 100;
  var numb2 = 200;
  var sign =">=";
  if (sign =="=="){
    if (numb == numb2){
     alert(" these numbers are equal to each other");
    }
    else{
      alert("These numbers are not equal to each other");
    }
  }
  else if (sign == ">="){
    if (numb >= numb2){
      alert ("numb >= numb2 is true");
    }
    else {
      alert("numb >= numb2 is false" );
    }
  }
}

function combineStrings(){
  var str1 = "tech ";
  var str2 = "n9ne";
  var newString = str1+ str2;
  return newString;
  console.log (newString);
}

function condition(inNumb){

  if (inNumb >= 100){
    console.log("Boom!");
  }
  else{
    console.log("zooweemamma");
  }
}

function randomWords(){
  // spliced a rhyme scheme
  var rhyme = [" popping it", " opn it", " esophagus", " necropolis"," metropolis" ];
  var sentence =["He don't wanna come into my killer",
"Cause when he use to come around he feel a",
"He know that me and Scooby and Makzilla be",
"Brother be", "lead is gonna fill the"];
var randomInd = Math.floor( Math.random() * rhyme.length );
var barzz = sentence[randomInd]+ rhyme[randomInd];
console.log(barzz);
}
