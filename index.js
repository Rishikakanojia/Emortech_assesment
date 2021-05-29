 // function checkPassword(form) {
 //                pwd = form.pwd.value;
 //                repwd = form.repwd.value;
  
 //                // If password not entered
 //                if (document.getElementById(pwd) == '')
 //                    alert ("Please enter Password");
                      
 //                // If confirm password not entered
 //                else if (repwd == '')
 //                    alert ("Please enter confirm password");
                      
 //                // If Not same return False.    
 //                else if (pwd != repwd) {
 //  document.getElementById("Sec2").style.display = "none";
 //                    return false;
 //                }
  
 //                // If same return True.
 //                else {
 //  document.getElementById("Sec1").style.display = "none";
 //                    return true;
 //                }
 //            }

 const submit = () => {
if(document.getElementById("pwd").value == "")
document.getElementById("error").innerHTML= "Please Enter Password!";

else if(document.getElementById("repwd").value == "")
document.getElementById("error").innerHTML= "Please Enter Password!";

 else if(document.getElementById("pwd").value != document.getElementById("repwd").value
)
document.getElementById("error").innerHTML="Passswords do not Match!";
 
  else if (document.getElementById("pwd").value.length< 8)
document.getElementById("error").innerHTML="Passwords is Short!";

else {
  document.getElementById("sec1").style.display = "none";
  document.getElementById("sec2").style.display = "block";
  


                }
            }






