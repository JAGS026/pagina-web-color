function crearColor(element,esSuperior) {
    let randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    element.style.backgroundColor = randomColor;

    let cuadro = element.querySelector('.cuadro');
    const imagen_url = 'https://images.pexels.com/photos/32495048/pexels-photo-32495048.jpeg?_gl=1*68kj4m*_ga*NDE1OTgzMTg3LjE3NTA4MjU2OTY.*_ga_8JE65Q40S6*czE3NTA4MjU2OTUkbzEkZzEkdDE3NTA4MjU3NDkkajYkbDAkaDA.';
    const imagen_tamano = '40px';

    if (!cuadro) {
        cuadro = document.createElement('div');
        cuadro.className = 'cuadro';
        element.appendChild(cuadro);

        Object.assign(cuadro.style, {
            position: 'absolute',
            width: '200px',
            height: '200px',
            backgroundColor: 'black',
            border: '2px solid black',
            boxShadow: '0 0 5px rgba(0,0,0,0.3)',
            transition: 'background-color 0.5s ease',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        });

        let img = document.createElement('img');
        img.src = imagen_url;
        img.alt = 'Imagen en el cuadro';

        if (esSuperior) {
           
            Object.assign(img.style, {
                width: '100%',
                height: '100%',
                objectFit: 'cover' 
            });
        } else {
            
            Object.assign(img.style, {
                width: imagen_tamano,
                height: imagen_tamano,
                objectFit: 'none' 
            });
        }
        cuadro.appendChild(img);
    }

    let cuadroColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    cuadro.style.backgroundColor = cuadroColor;
}