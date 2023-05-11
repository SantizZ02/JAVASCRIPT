function apostar(){
    //CALCULAR EL NUMERO ALEATORIO DEL 1 AL 10
    var a =Math.round(Math.random()*10); //ALEATORIO DEL 1 AL 10
    document.getElementById("resultado"). value=a;
    var b=document.getElementById("apostado"). value;
    //VALIDAR SI ACERTO NUMERO
    if(a==b){
        document.getElementById("salida").value="GANO APUESTA";
    }else{
        document.getElementById("salida"). value="PERDIO APUESTA";
    }
    }
    //LIMPIAR
    function cancel(){
        document.getElementById("apostado").value="";
        document.getElementById("resultado").value="";
        document.getElementById("salida").value="";
    }