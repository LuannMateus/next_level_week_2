// Selecionar o butão. Qual butão?
document.querySelector('#add-time')
//Quando clicar no butão.
.addEventListener('click', cloneField)

// Execute uma ação:
function cloneField() {
    //Duplicar campos; Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    // Limpar cada campo.
    fields.forEach(function(field) {
        field.value = ""
    })
    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

