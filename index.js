import { registraImagen } from './lazy.js';

const min = 1;
const max = 122; //Cantidad de imagenes que tiene el API en este momento

const random = () => Math.floor(Math.random() * (max - min)) + min;


const createImageNode = () => {
    const imageNumber = random();

    const image = document.createElement('img');
    image.className = "mx-auto rounded bg-gray-200";
    image.style.minHeight = "200px"
    image.width = "320";
    image.dataset.src = `https://randomfox.ca/images/${imageNumber}.jpg`;
    image.alt = `Zorro número ${imageNumber}`;
    
    const container = document.createElement('div');
    container.className = "p-4";
    
    container.appendChild(image);
    
    return container;
}

const mountNode = document.getElementById('images');

const addImage = () => {
    const newImage = createImageNode();
    
    mountNode.appendChild(newImage);
    registraImagen(newImage);
}

const addButton = document.getElementById('add');
addButton.addEventListener('click', addImage);

const clear = () => {
    mountNode.innerHTML = '';
}

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);