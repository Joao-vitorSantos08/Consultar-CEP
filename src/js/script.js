let btnCep = document.getElementById("btn-cep")
const logradouro = document.getElementById("logradouro")
const bairro = document.getElementById("bairro")
const regiao = document.getElementById("regiao")
const estado = document.getElementById("estado")

btnCep.addEventListener("click", function(event){

    event.preventDefault()
    let cep = document.getElementById("input_cep").value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            logradouro.innerText = data.logradouro
            bairro.innerText = data.bairro
            regiao.innerText = data.localidade
            estado.innerText = data.uf
        })
        .catch((err) => console.log(err));

})
