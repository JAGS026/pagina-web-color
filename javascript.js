function crearColor(element) {
    let randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    element.style.backgroundColor = randomColor;

    let cuadro = element.querySelector('.cuadro');

    if (!cuadro) {
        cuadro = document.createElement('div');

        element.appendChild(cuadro);

        Object.assign(cuadro.style, {
            position: 'absolute',
            width: '100px',
            height: '100px',
            backgroundColor: 'black',
            border: '2px solid black',
            boxShadow: '0 0 5px rgba(0,0,0,0.3)',
            transition: 'background-color 0.5s ease'
        });
    }

    let cuadroColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    cuadro.style.backgroundColor = cuadroColor;
}