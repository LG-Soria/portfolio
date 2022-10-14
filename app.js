'use strict'
/*
const grande = document.querySelector('.proyectosBox')
const caja = document.querySelectorAll('.proyecto')
const punto = document.querySelectorAll('.punto')

    punto.forEach ( ( _cadaPunto, i ) => {
    punto[i].addEventListener('click',()=>{
        let posicion = i
        //posicion es 0 transformX es 0
        //posicion es 1 transformX es -50%
        //operacion = posicion * -50

        let operacion = posicion * -25

        grande.style.transform = `translateX(${ operacion }%)`
       


        punto.forEach( (_cadaPunto, i ) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

      
   })
})

*/


//CARRUSEL DE PROYECTOS
const carrusel = document.querySelector('.proyectosBox')

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




const aboutDiv = document.getElementsByClassName('.aboutDiv');
const c = aboutDiv.getelementsByTagName('*');
const children = []

for(var i = 0; i < c.length; i++) children.push(c[i]);

function expandToFullHeight (evt) {
    evt.target.style.height = evt.target.scrollHeight.toString() + "px";
}

function retract(evt){
        if(children.indexOf(evt.relatedTarget) === -1) evt.target.style.height = "" ;

    }

    if(aboutDiv.addEventListener) {
        aboutDiv.addEventListener("mouseover", expandToFullHeight, false);
        aboutDiv.addEventListener("mouseout", retract           , false);
            for(var i = 0; i < children.length; i++)
            children[i].addEventListener("mouseout", function(evt){evt.stopPropagation();}, false)
    }