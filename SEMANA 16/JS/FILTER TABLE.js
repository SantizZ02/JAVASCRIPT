function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");//DATO INGRESADO
    filter = input.value.toUpperCase();//CONVERTIR TEXTO EN MAYUSCULA
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) { // RECORRE TABLA COLUMNA NOMBRE PELICULA
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) { //ENCONTRAR NOMBRE PELICULA 
          tr[i].style.display = "";
          } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }