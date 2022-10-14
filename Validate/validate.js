function validate(){
  let user = document.getElementById('user').value;

  let mobile =document.getElementById('mobile').value;

  if(user ==""){
    document.getElementById('user_Message').innerHTML ="Pleaes Enter User Name"
  }
 if(user.length <4){
    document.getElementById('user_Message').innerHTML="Please Enter Min 4 Char"
  } 

  if(mobile == null || mobile.length  <= 10 ){
    document.getElementById('mobile_Message').innerHTML ="Please Enter Mobile Number"
  }


    return false
}