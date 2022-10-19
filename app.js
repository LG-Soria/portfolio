'use strict'


//CARRUSEL DE PROYECTOS
const carrusel = document.querySelector('.proyectosBoxDos')

const item = document.querySelector('.proyectoItems')

let maxScarollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null
let step = 1
const start = () => {
        intervalo = setInterval(() => {
            carrusel.scrollLeft = carrusel.scrollLeft + step

            if(carrusel.scrollLeft === maxScarollLeft) {
                step= step * -1;
            }
            else if (carrusel.scrollLeft === 0){
                step = step * -1
            }

            
        }, 15);
}

const stop = () => {
    clearInterval(intervalo);
};
carrusel.addEventListener("mouseover", () => {
    stop()
});


carrusel.addEventListener("mouseout", () => {
    start()
})

start()

