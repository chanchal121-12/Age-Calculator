function calculateAge(){

let dob=document.getElementById("dob").value;

if(dob==""){
alert("Please select Date of Birth");
return;
}

let birthDate=new Date(dob);
let today=new Date();

if(birthDate>today){
document.getElementById("result").innerHTML="Invalid Date!";
return;
}

let age=today.getFullYear()-birthDate.getFullYear();

let month=today.getMonth()-birthDate.getMonth();

if(month<0 || (month===0 && today.getDate()<birthDate.getDate())){
age--;
}

document.getElementById("result").innerHTML=
"Your Age is "+age+" Years";
}
