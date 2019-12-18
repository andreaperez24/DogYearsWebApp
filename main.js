var dog_age = document.getElementsByClassName("dog-age")[0];
var userClick=document.getElementsByClassName("pop_up_box")[0];


function humanYears(){
  var operation= ((dog_age.value -2 )*4) + 21;
  return operation;
}
function result(){
  alert("Your dog is " + humanYears() + " years old");
}

userClick.addEventListener("click", result);
