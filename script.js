// Assignment code here
function generatePassword(){
  var letters "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  var numbers "1,2,3,4,5,6,7,8,9,0";
  var symbols "!,@,#,$,%,^,&,*,(,),_,+,=,],[,?,>,<,~";

  return "hello";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
