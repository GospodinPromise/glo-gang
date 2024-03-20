const bodyshnik = document.querySelector('.body')
let marginLefd = 0



const DomElement = {
    selector: prompt('selector') ,
    height: prompt('visota') , 
    width: prompt('width') ,
    bg:  prompt('bg'),
    ebanina: function(){
        if (this.selector[0] === '.'){
            const divyshnik = document.createElement('div')
            divyshnik.setAttribute('class', this.selector.slice(1))
            divyshnik.textContent = 'eboba'
            bodyshnik.appendChild(divyshnik)
            divyshnik.style.backgroundColor = this.bg
            divyshnik.style.width = this.width
            divyshnik.style.height = this.height
            divyshnik.style.position = 'relative'
            
            let pipa = 0
            let papa = 0
            const zalupa = 'px'
            window.addEventListener('keydown', function(event){
                if(event.key === 'ArrowRight') {
                    pipa = (pipa + 10) 
                    divyshnik.style.left = pipa + zalupa
                } else if(event.key === 'ArrowLeft') {
                    pipa = (pipa - 10) 
                    divyshnik.style.left = pipa + zalupa
                } else if (event.key === 'ArrowDown'){
                    papa = (papa - 10)
                    divyshnik.style.bottom = papa + zalupa
                } else if (event.key === 'ArrowUp'){
                    papa = (papa + 10)
                    divyshnik.style.bottom = papa + zalupa}
            })
            
        
        }
    }
}


window.addEventListener('DOMContentLoaded', function(){
    DomElement.ebanina()
})


