function crearColor(element) {

    let randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');

    element.style.backgroundColor = randomColor;


    let cuadroColor = "#" + Math.floor(Math.random() *0xFFFFFF).toString(16).padStart(6, '0');


    let cuadro = element.querySelector('.cuadro');
    if (!cuadro) {
        cuadro = document.createElement('div');
        cuadro.className = 'cuadro';
        element.appendChild(cuadro);
    }


    cuadro.style.backgroundColor = cuadroColor;
}

