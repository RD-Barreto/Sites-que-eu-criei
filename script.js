let list = document.querySelectorAll ('.item')
let volta = document.getElementById  ('volta')
let frente = document.getElementById  ('frente')

//count = 3
//0,1,2
//
let count = list.length
let active = 0 

frente.onclick = () => {
    let activeOld = document.querySelector ('.active')
    activeOld.classList.remove ('active')

    active = active >= count-1 ? 0 : active +1
    list [active].classList.add ('active')
}

volta.onclick = ()=> {
    let activeOld = document.querySelector ('.active')
    activeOld.classList.remove ('active')

    active = active <= 0 ? count -1 : active -1
    list [active].classList.add ('active')
}
console.log (count)