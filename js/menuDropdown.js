/* Cuando el usuario da clic en el boton, 
se muestra el contenido del dropdown */
function myFunction() {
    document.getElementById("miDropdown").classList.toggle("mostrar");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('mostrar')) {
          openDropdown.classList.remove('mostrar');
        }
      }
    }
  }