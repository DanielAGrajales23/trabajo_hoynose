let Increse = 0;

let show = document.querySelector('.show')
let cuerpo = document.querySelector('.container')


document.addEventListener('click', (e) => {
    console.log(e)
    if (e.target.matches('#Decrease')) {
        Increse--
        show.innerHTML = Increse
    }
else 
    if(e.target.matches('#Increase')){
        Increse ++
        show.innerHTML = Increse
    }
    else
        if (e.target.matches('#Reset')){
            Increse =0
            show.innerHTML = Increse
        }
})
