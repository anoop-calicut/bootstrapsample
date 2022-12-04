var input1 = document.getElementById("emailInput");
var input2 = document.getElementById("password1");
var input3 = document.getElementById("password2");

console.log(input1.value);
console.log(input2.value);

function run()
{
  if(input2.value=='')
  {
    console.log("Password cannot be empty");
    return;
  }
  
  if(input2.value==input3.value)
  {
    console.log("Passwords matched");
  } else {
    console.log("Passwords not matched");
  }
}