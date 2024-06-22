
const botonColor = document.getElementById('botonColor');


const crearColor = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


document.addEventListener('click',e=>{
    if(e.target===botonColor){
        let color ="#";
        for(let i =0; i<6; i++){
            color +=crearColor[randomNumber()]
        }
        document.body.style.background = color;
    }
})

function randomNumber(){
    return Math.floor(Math.random() * crearColor.length);
}







