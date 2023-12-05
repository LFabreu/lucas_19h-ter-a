const CEP = document.querySelector('.cep')
const CEP_BTN = document.querySelector('.cep-btn')
const RUA = document.querySelector('.Rua')
const BAIRRO = document.querySelector('.bairro')
const ESTADO = document.querySelector('.estado')
const CIDADE = document.querySelector('.cidade')
const URL = "https://cep.awesomeapi.com.br/json/"

let fetch_cep = async(cep1) => {
    const response = await fetch (URL + cep1)
    console.log(response)
    if (response.status == 200) {
        const data = response.json()
        return data
        
    }
}


const trocar_nomes = async (cep1) =>{
    console.log('chegou aqui')
    const info = await fetch_cep(cep1)
    
    if (info) {
        RUA.innerText = info.address
        BAIRRO.innerText = info.district
        CIDADE.innerText = info.city
        ESTADO.innerText = info.state
    }

}

CEP.addEventListener('submit', (evento) => {
    evento.preventDefault()
    let buscar = CEP_BTN.value
    trocar_nomes(buscar)
})
