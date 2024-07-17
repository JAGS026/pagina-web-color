function crearColor(element) {

    let randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');

    element.style.backgroundColor = randomColor;
}

