const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    console.log(u);
    console.log(p);
    if(u=="" && p==""){
        alert("Enter username and password")
    }
    else if(u==""){
        alert("Enter username")
    }
    else if(p==""){
        alert("Enter password")
    }
    valid={'ad':'ad123' , 'admin':'admin123', 'ad1':'ad1-123' ,'user':'pswd'}
    f=0
    for (let x in valid){
      if(x==u){
          if(valid[x]==p){
           location.replace("index.html")
          f=1;
          break;
          }
        }
    }
    if(f==0){
        document.getElementById("login-error-msg").innerHTML=u+p+'Invalid username <span id="error-msg-second-line">and/or password</span>';
        document.getElementsByName("username").value="";
        document.getElementsByName("username").value="";
    }
})