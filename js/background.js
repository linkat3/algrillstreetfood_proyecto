const boton = document.getElementById("btn"); 
boton.addEventListener("click", () => { 
    boton.style.color = "white"; 
    boton.style.backgroundColor = "black"; 
});

// Para cambiar estilo color y tamaño de la sección copyright
let boton2 = document.getElementById("titulo"); 
boton2.addEventListener("click", () => { 
    // boton2.style.color = "blue";
    boton2.style.fontSize = "16px"; 
    boton2.style.fontWeight = "bold";
});