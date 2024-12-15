const signName = document.getElementById("signName");
const signEmail = document.getElementById("signEmail");
const signPass = document.getElementById("signPass");
const pre = document.getElementById("indicate");
const succ = document.getElementById("succ");
const nameUsed = document.getElementById("name-used");
const emailUsed = document.getElementById("email-used");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const welcome = document.getElementById("hello");
const checkIn = document.getElementById("checkin");
let arr=[];
let accounts;
if(localStorage.getItem("accounts")===null){
 accounts = [];
}
else{
 accounts = JSON.parse(localStorage.getItem("accounts"));
}
function checkname(){
    if(!succ.classList.contains("hide"))
 succ.classList.add("hide");   
    if(!nameUsed.classList.contains("hide"))
        nameUsed.classList.add("hide");   
const regex = /^[A-Za-z_]{3,10}[0-9]{0,5}$/
if(regex.test(signName.value)){
    signName.classList.add("is-valid");
    signName.classList.remove("is-invalid");
}
else{
    signName.classList.remove("is-valid");
    signName.classList.add("is-invalid");

}
}
function checkemail(){
    if(!succ.classList.contains("hide"))
        succ.classList.add("hide");  
    if(!emailUsed.classList.contains("hide"))
        emailUsed.classList.add("hide");   
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(regex.test(signEmail.value)){
    signEmail.classList.add("is-valid");
    signEmail.classList.remove("is-invalid");
}
else{
    signEmail.classList.remove("is-valid");
    signEmail.classList.add("is-invalid");

}
}
function checkpass(){
    if(!succ.classList.contains("hide"))
        succ.classList.add("hide");     
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
if(regex.test(signPass.value)){
    signPass.classList.add("is-valid");
    signPass.classList.remove("is-invalid");
    pre.classList.add("hide");
}
else{
    signPass.classList.remove("is-valid");
    signPass.classList.add("is-invalid");
    pre.classList.remove("hide");
}
}
function clearForm(){
    signName.value ="";
    signEmail.value="";
    signPass.value="";
}
function signup(){
    if(signName.classList.contains("is-valid") &&signEmail.classList.contains("is-valid") &&signPass.classList.contains("is-valid")){
        if(!checkIncludes(signName.value,signEmail.value)){
            accounts.push({name:signName.value,email:signEmail.value ,pass:signPass.value})
            localStorage.setItem("accounts",JSON.stringify(accounts));
            succ.classList.remove("hide");
            clearForm();
        }
        else{
            if(checkIncludes(signName.value)){
                nameUsed.classList.remove("hide");
            }
            if(checkIncludes(null,signEmail.value)){
                emailUsed.classList.remove("hide");
            }
        }

}}
function checkIncludes(name,email){
    if(localStorage.getItem("accounts")!==null){
     let curr = JSON.parse(localStorage.getItem("accounts"));
     for(let item of curr){
        if(item.name===name || item.email===email){
            return true;
        }
     }
     return false;
    }
    return false;

}
function hide(){
    if(email !== arr[0] || pass!== arr[1]){
        checkIn.classList.add("hide");
    }

}
function signin(){
    if(localStorage.getItem("accounts")!==null){
        let curr = JSON.parse(localStorage.getItem("accounts"));
        let i= 0;
        for(let item of curr){
           if(item.email===email.value &&item.pass===password.value){
           localStorage.setItem("currentUser",item.name)
           window.location.href="hello.html";
            break;
           }
           i++;

        }
        if(i===curr.length){
        checkIn.classList.remove("hide");
        arr =[email.value,pass.value]
        return arr;
        }
       }

}
function hello(){
    welcome.innerText="Welcome "+localStorage.getItem("currentUser");
}
