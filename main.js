// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = handleSubmit

// Funções

function handleSubmit(evento){
    evento.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    console.log(weight, height)
}