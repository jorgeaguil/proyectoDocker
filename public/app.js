document.addEventListener("DOMContentLoaded", function() {
    let fechaElemento = document.getElementById("fecha");
  
    function actualizarFecha() {
      let fechaActual = new Date();
      let dia = fechaActual.getDate();
      let mes = fechaActual.getMonth() + 1;
      let year = fechaActual.getFullYear();
      let hora = fechaActual.getHours();
      let minutos = fechaActual.getMinutes();
      let segundos = fechaActual.getSeconds();
      let fechaCompleta = dia + "/" + mes + "/" + year + " " + hora + ":" + minutos + ":" + segundos;
      fechaElemento.innerHTML = fechaCompleta;
    }
  
    actualizarFecha();
    setInterval(actualizarFecha, 1000);
  });
  