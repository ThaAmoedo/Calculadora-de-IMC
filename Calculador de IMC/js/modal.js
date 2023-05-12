
export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'), 
    buttonClose: document.querySelector('.modal button.close'),

open(){
    Modal.wrapper.classList.add('open')
},

close(){
    Modal.wrapper.classList.remove('open')

}
}


//botão
Modal.buttonClose.onclick = () => {
    Modal.close()
}  //por ter só uma linha eu nn precisaria usar as chaver { }



//Adcionando a opção ESC para fecar a janela
window.addEventListener('keydown', handleKeydown)  //primeiro é o tipo de evento q é keydown (q é a tecla digitada)

function handleKeydown(event){
//console.log(event.key) //para eu descobrir qual o nome da tecla q eu quero kkkk

if(event.key==='Escape'){
    Modal.close()
}

}

/*
Eu poderia colocar:
window.onKeydow = handleKeydown
function handleKeydown(event){

}

Porém ele só vai aceitar um por aplicativo, então se no futuro em algum outro
arquivo eu colocar o .onKeydow para window ele vai disconsiderar esse ai (window.onKeydow = handleKeydown)
e vai considerar o ultimo que ele carregar, agora se eu colocar da forma que está sendo usao que é:
    window.addEventListener('keydown', handleKeydown)
Eu posso repitir esse .addEventListener em todods os outros arquivos durande a minha aplicação 
que ele não vai "jogar fora" esse aqui (window.addEventListener('keydown', handleKeydown)), ele ainda vai registrar

*/
