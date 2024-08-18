const cadaBolo = document.getElementById('cada-bolo')
const cadaPreparo = document.getElementById('cada-preparo')
const infoBox = document.getElementById('info')
const boloImagem = document.getElementById('bolo-imagem')

const todasAsReceitas = [
    {
        nomeReceita : "Bolo de cenoura",
        ingredientes : [
            "4x Ovos",
            "1/2 Xícaras (chá) de óleo",
            "2 e 1/2 Xícaras de farinha de trigo",
            "3x Cenouras raladas",
            "2x Xícaras (chá) de açúcar",
            "1x Colher (sopa) de fermento em pó"
        ],
        temCobertura : true,
        cobertura : [
            "<strong>Cobertura:</strong>",
            "1x colher de (sopa) mantega",
            "1x Xícara (chá) açúcar",
            "3x Colher (Sopa) chocolate em pó",
            "1x Xícara (chá) de leite"
        ],

        modoPreparo : `Como preparar a massa
        Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture,
        Acrescente o açúcar e bata novamente por 5 minutos,
        Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente,
        Acrescente o fermento e misture lentamente com uma colher,
        Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos`,
        imagem : "../BoloDaTia/cenoura.webp"
    },

    {
        nomeReceita : "Bolo de chocolate",
        ingredientes : [
            "4 ovos",
            "2 colheres (sopa) de manteiga",
            "2 xícaras de (chá) de açúcar",
            "1 xícara de (chá) de leite",
            "4 colheres (sopa) chocolate em pó",
            "3 xícaras de (chá) de farinha de trigo",
            "2 colheres (sopa) e fermento"
        ],
        modoPreparo : `Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos adicione o fermento e misture com uma espátula delicadamente Em uma forma untada, despeje a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! Outra solução pode ser colocar apenas uma colher de fermento e manter a sua receita em uma forma pequena.`,
        imagem : "../BoloDaTia/chocolate.webp"
    },

    {
        nomeReceita : "Bolo de Cocô Ralado",
        ingredientes : [
            "2 xícaras (chá) de açúcar",
            "4 ovo",
            "2 colheres de (sopa) coco ralado",
            "2 colheres (sopa) de margarina sem sal",
            "2 xícaras (chá) de farinha de trigo",
            "1 xícara (chá) de leite",
            "1 colher (sopa) fermento em pó"
        ],

        temCobertura : true,
        cobertura : [
            "<strong>Cobertura:</strong>",
            "1 lata de leite codensado",
            "1 xícara de coco ralado",
            "1 vidro(200 ml) leite de coco"
        ],
        modoPreparo : `Bata no liquidificador os ovos, o leite, a margarina, o açúcar e o coco; Coloque o trigo em uma vasilha, despeje a massa batida e misture até que fique homogêneo; Adicione o coco e misture; Por último, acrescente o fermento; Coloque em forma untada e enfarinhada, Asse em forno médio, preaquecido, por cerca de 40 minutos, ou até dourar. `,
        imagem : "../BoloDaTia/coco.webp"
    }
]


const pegaValor = () => {
    const valor = sessionStorage.getItem('id-bolo')
    alteraPagina(valor, todasAsReceitas)
}

const alteraPagina = (valor, lista) => {
    const selecionado = lista[valor-1]
    cadaBolo.innerText = selecionado.nomeReceita

    const cadaCalda = document.createElement('div')
    cadaCalda.id = 'cada-calda'

    const cadaIngrediente = document.createElement('div')
    cadaIngrediente.id = 'cada-ingrediente'

    if (selecionado.temCobertura) {

        selecionado.cobertura.forEach((calda) => {
            cadaCalda.innerHTML += `${calda} <br>`
        })

        selecionado.ingredientes.forEach((cada) => {
            cadaIngrediente.innerHTML += `${cada} <br>`
        })

        infoBox.appendChild(cadaIngrediente)
        infoBox.appendChild(cadaCalda)

    } else {
        selecionado.ingredientes.forEach((cada) => {
        cadaIngrediente.innerHTML += `${cada} <br>` 
        cadaIngrediente.style.width = '95%'
        infoBox.appendChild(cadaIngrediente)})
    }

    const foto = document.createElement('img')
    foto.src = selecionado.imagem


    document.title = `${selecionado.nomeReceita} - BDT`

    boloImagem.appendChild(foto)
    cadaPreparo.innerHTML = selecionado.modoPreparo
}

document.addEventListener('DOMContentLoaded', (e) => {
    pegaValor()
})