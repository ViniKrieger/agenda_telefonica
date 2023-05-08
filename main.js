const form = document.getElementById ('formAgenda')

let linhas = ''

form.addEventListener ('submit',function(e){
    e.preventDefault()

    const inputNomePessoa = document.getElementById('nomePessoa')
    const inputNumeroPessoa = document.getElementById('numeroPessoa')

    let linha = '<tr>'
    linha += `<td>${inputNomePessoa.value}</td>`
    linha += `<td>${inputNumeroPessoa.value}</td>`
    linha += '</tr>'

    linhas += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    inputNomePessoa.value = ''
    inputNumeroPessoa.value =''
})



