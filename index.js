function love(){
var love=Math.random()*100;
love=Math.floor(love)+1;
alert("Your love score is " + love + "%");
}

function validate(){

  var messageY = document.getElementById("messageY").value;
  var messageL = document.getElementById("messageL").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;

  if(messageY.length <= 3){
    text = "Please Enter More Than 3 Characters";
    error_message.innerHTML = text;
    return false;
  }
  if(messageL.length <= 3){
    text = "Please Enter More Than 3 Characters";
    error_message.innerHTML = text;
    return false;
  }
love();
}


// $('#btn').onClick(function(){
//     $('#target_element').addClass('#letgo');
// });



//
//   alert("Form Submitted Successfully!");
//   return true;
// }
