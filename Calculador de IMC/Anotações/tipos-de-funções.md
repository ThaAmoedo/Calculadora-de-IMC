

// 3 maneiras de criar e atribuir funções a um evento:

1-  
form.onsubmit = function() {}


2-
form.onsubmit = () => {}


3-
form.onsubmit = testeSubmit
function testeSubmit() {

}




// modelo 1
form.onsubmit = function(event) {
    event.preventDefault() 

    const weight = inputWeight.value
    const height = inputHeight.value
}



// modelo 2
form.onsubmit = (event) => {
    event.preventDefault() 

    const weight = inputWeight.value
    const height = inputHeight.value
}



// modelo 3
form.onsubmit = testeSubmit


function testeSubmit(event) {
    event.preventDefault() 

    const weight = inputWeight.value
    const height = inputHeight.value
}