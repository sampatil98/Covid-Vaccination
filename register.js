// let submit=document.getElementById("btn");
// let name=document.getElementById("name");
// let age=document.getElementById("age");
// let number=document.getElementById("number");

// let vaccine=document.getElementById("Vaccine");
let form=document.querySelector("form");


let data=JSON.parse(localStorage.getItem("registration_list")) || [];

form.addEventListener("submit",()=>{
   // e.preventDefault();

    if(form.name.value.length>=4){
        let age=form.age.value;
        if(age>=18 && age<=40){
            let pri="";
            if(age<=25){
                pri="p0"
            }else if(age>25 && age<=30){
                pri="p1"
            }else if(age>30 && age<=35){
                pri="p2"
            }else{
                pri="p3"
            }
            let OTP=Math.floor(1000 + Math.random()*9000);
            let obj={
                name:form.name.value,
                age:form.age.value,
                number:form.number.value,
                designation:form.Designation.value,
                vaccine:form.Vaccine.value,
                priority:pri,
                otp:OTP
            }
            alert("USER REGISTRATION SUCCESSFUL");
            data.push(obj);
            localStorage.setItem("registration_list",JSON.stringify(data));
        }else{
            alert("YOU ARE NOT ELIGILABLE")
        }
    }else{
        alert("PLEASE ENTER CORRECT NAME")
    } 
    
   
})