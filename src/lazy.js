let cantidadAgregadas = 0;
let cantidadCargadas = 0;

const log = (cantidadAgregadas, cantidadCargadas) => {
    console.log('--------------------------------------');
    console.log(`🐱‍🏍 Total de imágenes agregadas: ${cantidadAgregadas}`);
    console.log(`✨ Imágenes cargadas: ${cantidadCargadas}`);
    console.log('--------------------------------------');
}

const isIntercepted = (entrada) => {
    return entrada.isIntersecting; // true si está dentro del viewport
}

const cargaImagen = (entrada) => {
    const container = entrada.target;

    const imagen = container.firstChild;
    const imageUrl = imagen.dataset.src;
    imagen.src = imageUrl;

    cantidadCargadas++;

    log(cantidadAgregadas, cantidadCargadas);
    
    //console.log("Imagen interceptada!");

    //Dejar de registrar la imagen
    observador.unobserve(container);
}

//Web API 'Intersection Observer' permite saber cuando un elemento está dentro del viewport
const observador = new IntersectionObserver((entradas) => {
    entradas
        .filter(isIntercepted)
        .forEach(cargaImagen);
})


export const registraImagen = (imagen) => {

    //Registrar la imagen
    observador.observe(imagen);

    cantidadAgregadas++;

    log(cantidadAgregadas, cantidadCargadas);
}