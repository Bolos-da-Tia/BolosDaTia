const boloUm = document.getElementById('bolo1')
const boloDois = document.getElementById('bolo2')
const boloTres = document.getElementById('bolo3')

const bolos = [boloUm, boloDois, boloTres]

bolos.forEach((bolo) =>{
    bolo.addEventListener('click', (e) => {
        e.preventDefault()
        verificaBolo(bolo)
        verificaArmazanamento()
    })
})

const verificaBolo = (bolo) => {
    let nome = bolo.innerHTML
    if (nome == "Bolo de Cenoura") {
        sessionStorage.setItem("id-bolo", "1")
    } else if (nome == "Bolo de Chocolate") {
        sessionStorage.setItem("id-bolo", "2")
    } else if (nome == "Bolo de Coco") {
        sessionStorage.setItem("id-bolo", "3")
    }
}

const verificaArmazanamento = () => {
    let valor = sessionStorage.getItem('id-bolo')
    if (valor) {
        window.location.pathname = 'BoloDaTia/Receita-bolo.html'
    }
}