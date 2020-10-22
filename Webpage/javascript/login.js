const admins = [
     {
          username: "erik",
          password: "hejsan"
     },
     {
          username: "danne",
          password: "ciao"
     },
     {
          username: "adde",
          password: "fritös"
     },
]

document.addEventListener("DOMContentLoaded", () => {
     
     let button = document.getElementById("button");
     
     button.addEventListener("click", (e) => {
          e.preventDefault();
          checkUser();          
     })

     function checkUser() {
          let input_username = document.getElementById("username").value;
          let input_password = document.getElementById("password").value;
          
          admins.forEach((admin) => {
               if(input_username == admin.username && input_password == admin.password) {
                    console.log("it's a match");
                    return;
               }               
          }); 
          console.log("incorrect username and/or password");
     }
     
})