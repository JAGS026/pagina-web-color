function crearColor(element) {
    let randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    element.style.backgroundColor = randomColor;

    let cuadro = element.querySelector('.cuadro');

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
        img.src = 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg';
        img.alt = 'Imagen en el cuadro';

        Object.assign(img.style, {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
        })
        cuadro.appendChild(img);

        //Inicializar la rotación 
        cuadro.dataset.rotation = 0; // Usamos dataset para almacenar el ángulo actual

        //Añadir evento de clic al cuadro para rotar
        cuadro.onclick = function (event) {
            event.stopPropagation();

            let currentRotation = parseInt(this.dataset.rotation); // Obtener rotación actual
            let newRotation = currentRotation + 90; // Aumentar en 90 grados
            this.style.transform = `rotate(${newRotation}deg)`; // Aplicar la rotación
            this.dataset.rotation = newRotation; // Guardar la nueva rotación
        };
    }

    let cuadroColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    cuadro.style.backgroundColor = cuadroColor;
}