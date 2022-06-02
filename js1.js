



// Añadir un nuevo elemento <p> con el texto “Texto del nuevo párrafo” y que sea hijo del body



var elemento = document.createElement('p'); //cree el elemento p , falta insertarlo en el html
elemento.innerHTML='Nuevo Parrafo';
document.body.appendChild(elemento);


//Obtener la lista de elementos de etiqueta <p> y mostrarlos en un alert de JavaScript 


var parrafo=document.getElementsByTagName("p");
alert("El numero de parrafos que tenemos es: " +parrafo.length);








