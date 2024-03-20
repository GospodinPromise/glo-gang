const bodyshnik = document.querySelector('.body')
const DomElement = {
    selector: prompt('selector') ,
    height: prompt('visota') , 
    width: prompt('width') ,
    bg:  prompt('bg'),
    fontSize: prompt('font'),
    ebanina: function(){
        if (this.selector[0] === '.'){
            const divyshnik = document.createElement('div')
            divyshnik.setAttribute('class', this.selector.slice(1))
            divyshnik.textContent = 'eboba'
            bodyshnik.appendChild(divyshnik)
        } else if (this.selector[0] === '#') {
            const textikP = document.createElement('p')
            bodyshnik.appendChild(textikP)
            textikP.setAttribute('id', this.selector.slice(1))
            textikP.textContent = 'gasdg'
        }
        bodyshnik.style.backgroundColor = this.bg
        bodyshnik.style.width = this.width
        bodyshnik.style.height = this.height
        bodyshnik.style.fontSize = this.fontSize
    }
}

let kakashka = new Object(DomElement)
kakashka.ebanina()