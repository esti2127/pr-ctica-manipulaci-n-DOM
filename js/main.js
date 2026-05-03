const imagesHeader = ["assets/images/viajes-1.jpg", "assets/images/viajes-2.jpg","assets/images/viajes-3.jpg", "assets/images/viajes-4.jpg", "assets/images/viajes-5.jpg", "assets/images/viajes-6.jpg", "assets/images/viajes-7.jpg" ];

const imagesGaleria = [
  { src: "assets/images/viajes-1.jpg", descripcion: "Playa de Cancún" },
  { src: "assets/images/viajes-2.jpg", descripcion: "Pasarela de Hawaii" },
  { src: "assets/images/viajes-3.jpg", descripcion: "Cartelera direcciones" },
  { src: "assets/images/viajes-4.jpg", descripcion: "Puente de Sevilla" },
  { src: "assets/images/viajes-5.jpg", descripcion: "Puente de Siena" },
  { src: "assets/images/viajes-6.jpg", descripcion: "Paseo Cantabria" },
  { src: "assets/images/viajes-7.jpg", descripcion: "Castillo Dénia" }
];

const imgAleatorio = Math.floor(Math.random() * imagesHeader.length); //random te devuelve un numero entre 0 y 1 (decimal) que luego se le multiplica a la length del array imagesHeader. Y como no da entero hace falta el floor. 

const headerImg = document.getElementById("header-img"); //guarda el id header-img en la variable headerImg. Así te ahorras reescribirlo en el HTML para manipular la imagen. 
headerImg.src = imagesHeader[imgAleatorio]; //la ruta de la imagen del header dependerá del número que haya salido aleatoriamente. 

const galeria = document.getElementById("galeria"); //busca el id galeria del HTML y lo guarda en la constante galeria

imagesGaleria.forEach(function(imagen) { //recorre cada elemento del array imagesGaleria
  const tarjeta = document.createElement("div"); //crea un nuevo div
  tarjeta.classList.add("tarjeta"); //ahora el div creado será de la clase tarjeta y así luego se estiliza desde CSS. 

  const img = document.createElement("img"); //crea una etiqueta img
  img.src = imagen.src; //le asigna la ruta de la imagen actual del array al src
  img.alt = imagen.descripcion; //para poner el texto de la imagen. Muy útil para el tema de la accesibilidad. 

  const descripcion = document.createElement("p");  //crea un p nuevo para la descripción
  descripcion.classList.add("tarjeta_descripcion"); //le da una clase css al p, para que luego se pueda estilizar
  descripcion.textContent = imagen.descripcion;//para meter texto dentro del p

  tarjeta.appendChild(img); //ahora la imagen está dentro del div tarjeta
  tarjeta.appendChild(descripcion);//y ahora también la descripción está dentro de la tarjeta
  galeria.appendChild(tarjeta);//ahora la tarjeta está en la galería y además se repite para todas las imágenes del array porque está dentro del forEach()

});

//pintar todas las cajas de una, no una a una, que no es eficiente. 
//for --------> forEach() para pasar por los elementos del array.



