let smlv=parseFloat(prompt("INGRESE SALARIO MINIMO LV 2023"))
let subtte=parseFloat(prompt("INGRESE SUBSIDIO TRANSPORTE LV 2023"))
function liquidar(){
    //SUELDO BASICO  
    let n1=document.getElementById("salario").value; //BAJAR INFO SALARIO DEL FORMULARIO
    let n2=document.getElementById("dias").value; //BAJAR INFO DIAS LAB. DEL FORMULARIO
    Sueldo=parseInt(n1)/30*parseInt(n2);
    document.getElementById("basico").value=Sueldo.toFixed(0);// SUBIR INFO BASICO AL FORMULARIO
    // SUBSIDIO TRASPORTE
    if(n1>=2*smlv){
        subsidiot=0; // no se le otorga
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }else{
        subsidiot=subtte/30*parseInt(n2);
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }
    //RECARGO NOCTURNO
    var nhrn=document.getElementById("hrn").value;
    let vhrn=n1/240*nhrn*1.35;// VALOR RECARGO NOCTURNO $$
    document.getElementById("totrecn").value=vhrn.toFixed(0);
    //TOTAL DEVENGADO
    document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);
    //
    let totaldevo=document.getElementById("totaldev").value;
    //SECCION DE LIQUIDACION DE DEDUCCIONES 
    //EPS Y PENSION
    let eps00=(totaldevo-subsidiot)*0.04; //EPS EMPLEADO
    let pens00=(totaldevo-subsidiot)*0.04; //PENSION EMPLEADO
    document.getElementById("eps").value=eps00.toFixed(0);
    document.getElementById("pension").value=pens00.toFixed(0);
    ////FONDO DE SOLIDARIDAD
    let fondo=0;
    if(n1>=4*smlv){ 
    let fondo=totaldevo*0.01; // CALCULAR FONDO DE SOLIDARIDAD
    document.getElementById("fondos").vlaue=fondo.toFixed(0);
    }else {
        document.getElementById("fondos").vlaue=fondo.toFixed(0);
    }
    //PRESTAMO
    let presta=document.getElementById("prestam").value;
    //TOTAL DEDUCCIONES
    document.getElementById("totaldedu").value=(parseFloat(document.getElementById('fondos').value)+parseFloat(document.getElementById('prestam').value)+parseFloat(document.getElementById('eps').value)+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);
//            
let totalddc=document.getElementById("totaldedu").value
//CALCULAR NETO A PAGAR AL EMPLEADO
let vneto=totaldevo-totalddc; //VALOR NETO A PAGAR $$
document.getElementById("neto").value=vneto.toFixed(0);
}