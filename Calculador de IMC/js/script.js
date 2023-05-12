
import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { IMC, notANumber } from './utils.js'

// variáveis - varibles
//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span') //span
//const modalBtnClose = document.querySelector('.modal button.close') //eu podeia colocar só close em vez de button.close
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



//form.onsubmit = event => {
form.onsubmit = function(event) {
    event.preventDefault() //evite o padrão (que seria enviar o formulário e *recarregar a pagina* )

    const weight = inputWeight.value
    const height = inputHeight.value


    const alertError = notANumber(weight) || notANumber(height);
    if (alertError){
        AlertError.open()
        return;
    } //se um ou outro for verdadeiro ficar retornando a função...se for falso segue adiante


    AlertError.close()

    const result = IMC(weight, height)
    displayResultMessage(result)
}


function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}


// Fechar a janela de erro ao digitar no campo
// evento é de nome input
inputWeight.oninput = () => AlertError.close()  
inputHeight.oninput = () => AlertError.close()
// .oninput vai sempre verificar se eu estou alterando algo nele