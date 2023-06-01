function validainputs(){
let email=document.getElementById("email");
let password=document.getElementById("password");
let ingreso=document.getElementById("login");
let emailval=email.value.trim();
let passwordval=password.value.trim();
let passwordok="12345"; //CLAVE REAL DE INGRESO
//VARIABLE TIPO SWITCHE ERRORF 0=no ocurre error 1=si ocurre error
var errorf=0;
if(emailval===""){
    ocErrorform(email,"Por favor ingrese su email");
    errorf=1; 
}else if (!valEmail(emailval)){
    ocErrorform(email,"Email no valido");
    errorf=1; 
}else{
    exitosform(email);
}
//VALIDAR CONTRASEÑA
if(passwordval===""){
    ocErrorform(password,"Por favor ingrese su contraseña");
    errorf=1;
}else if (passwordval!=passwordok){
    ocErrorform(password,"Comtraseña no valida");
    errorf=1;
}else{
    exitosform(password);   
}
//VALIDAR SI TODO ESTA OK
if(errorf==0){
    ingreso.addEventListener("click",function(){

    })
}
return false;
// función para validar errores en formularios
function ocErrorform (input, message){
    let formControl=input.parentElement;
    let small=formControl.querySelector("small");
    formControl.className="form-control error";
    small.innerText =message; 
 }
 // función para ingreso exitoso en formularios
 function exitosform (input){
     let formControl=input.parentElement;
         formControl.className="form-control success";
     }
 function valEmail(email){
 return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
 }
}