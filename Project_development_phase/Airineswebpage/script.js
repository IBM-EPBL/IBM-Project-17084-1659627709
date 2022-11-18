const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginButton1 = document.getElementById("login-form-submit1");


valid={'ad':'ad123' , 'admin':'admin123', 'ad1':'ad1-123' ,'user':'pswd'}

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

loginButton1.addEventListener("click", (e) => {
    e.preventDefault();
    var un = document.getElementById("uname").value;
    var ps = document.getElementById("pass").value;
    var rps = document.getElementById("rpass").value;
    var i=1;
    for (let x in valid) {
        if(x==un) {
            i=0;
            document.getElementById("login-error-msg").innerHTML='User already exists';
            document.getElementsByName("username").value="";
            document.getElementsByName("username").value="";
        }
    }
    if(i==1) {
        if(ps!=rps) {
            document.getElementById("login-error-msg").innerHTML='Password Mismatch';
            document.getElementsByName("username").value="";
            document.getElementsByName("username").value="";
        }
        else {
            valid[un]=ps;
            document.getElementById("login-error-msg").innerHTML='Sign-up Successful';
        }
    }
})