/*function trocarCor() {

    let cores = [
        "red",
        "black",
        "green",
        "pink",
        "orange",
        "white",
        "blue",
    ]

    let numero = Math.floor(Math.random() * cores.length)
    let botao = document.getElementById("enviar")
    botao.style.backgroundColor = cores[numero]
    botao.style.transition = "0.5s"
}

function trocarCorlimpar() {

    let cores = [
        "red",
        "black",
        "green",
        "pink",
        "orange",
        "white",
        "blue",
    ]

    let numero = Math.floor(Math.random() * cores.length)
    let botao = document.getElementById("limpar")
    botao.style.backgroundColor = cores[numero]
    botao.style.transition = "0.5s"
}
*/

const modal = document.querySelector('.modal')
const botoes = document.querySelectorAll('#trabalhos .btn')
const fechar = document.querySelector('.fechar')

console.log(modal)

function abrirModal(trabalhoNum) {
    modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}

function fecharModal() {
    modal.style.display = 'none'
    document.body.style.overflow = ''

}
botoes.forEach(function(botao, i) {
    botao.addEventListener('click', function(evento) {
        evento.preventDefault()
        abrirModal(i)
    })

})
fechar.addEventListener('click', fecharModal)