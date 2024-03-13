/* 9 Dada la edad de una persona (entre 1 y 110 años) y su 
género ('F' para mujeres, 'M' para hombres), indicar si está 
en edad para jubilarse. Observación: Las mujeres se jubilan 
con 60 años o más. Los hombres se jubilan con 65 años o más. 
Ejemplo: Si ingresa 60 y 'M', debe mostrar como resultado en 
pantalla “No se jubila”.*/


const boton3 = document.getElementById("btn2"); 
boton3.addEventListener("click", () => { 
  
    myFunct();

});

// Para cambiar estilo color y tamaño de la sección copyright

function myFunct() {


    let edad = prompt("Por favor, indique su edad");
    let gender = prompt("Indique si es F para femenino o M para masculino");
    // let edad = Math.random(110);
    const genero = ["F", "M"];


    let opcion1, opcion2, opcion3, opcion4;
    // for (edad = 1; edad<=110; edad++) {
    if (edad < 60 && (gender === "F" || gender === "f")) {
        opcion1 = "Es " + gender + " tiene " + edad + " No se jubila";
        r1 = document.getElementById("resp1");
        console.log(opcion1);
        document.getElementById("resp1").innerHTML= " "+ opcion1 +"!"; 

    } else if (edad >= 60 && (gender === "F" || gender === "f")) {
        opcion2 = "Es " + gender + " tiene " + edad + " y Si se jubila";
        r2 = document.getElementById("resp2");
        console.log(opcion2);
        document.getElementById("resp2").innerHTML= " "+ opcion2 +"!"; 

    } else if (edad >= 65 && (gender === "M" || gender === "m")) {
        opcion4 = "Es " + gender + " tiene " + edad + " si se jubila.";
        r4 = document.getElementById("resp4");
        console.log(opcion4);
        document.getElementById("resp4").innerHTML= " "+ opcion4 +"!"; 

    } else if (edad < 65 && (gender === "M" || gender === "m")) {
        opcion3 = "Es " + gender + " tiene " + edad + " No se jubila.";
        r3 = document.getElementById("resp3");
        console.log(opcion3);
        document.getElementById("resp3").innerHTML= " "+ opcion3 +"!"; 

    } else {
        console.log("Indique una opción valida.");
        document.getElementById("default").innerHTML= " "+ "Valores no válidos, \n Vuelve a intentarlo!."; 
    }
}


    

