const superior = document.getElementById('superior');
const inferior = document.getElementById('inferior');


const crearColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function cambioColorS() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += crearColor[randomNumber()]
    }
    superior.style.backgroundColor = color;
}

function cambioColorI() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += crearColor[randomNumber()]
    }
    inferior.style.backgroundColor = color;
}

function randomNumber() {
    return Math.floor(Math.random() * crearColor.length);
}
