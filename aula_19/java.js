const senha_elemento = document.getElementById("senha");
const copiar_elemento = document.getElementById("copiar");
const tamanho_elemento = document.getElementById("tamanho");
const maiusculas_elemento = document.getElementById("maiusculas");
const minusculas_elemento = document.getElementById("minusculas");
const numeros_elemento = document.getElementById("numeros");
const caracteres_elemento = document.getElementById("caracteres-especiais");
const gerar_senha_elemento = document.getElementById("gerar-senha");

const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const caracteres = '!@#$%¨&*_=+?/.,;<>()ç|'

function gerar_senha() {
    let tamanho_senha = tamanho_elemento.value

    if (!tamanho_senha || tamanho_senha < 6) {
        tamanho_senha = 6
    }
    else if (tamanho_senha > 18) {
        tamanho_senha = 18
    }

    let senha = ""

    for (let i = senha.length; i < tamanho_senha; i++){
        const x = misturar_senha()
        senha += x
    }



    senha_elemento.innerText = senha
}

function sortear_maiusculas(){
    let sorteado = maiusculas[Math.floor(Math.random() * maiusculas.length)]
    return sorteado
}
function sortear_minusculas(){
    let sorteado = minusculas[Math.floor(Math.random() * minusculas.length)]
    return sorteado
}
function sortear_numeros(){
    let sorteado = numeros[Math.floor(Math.random() * numeros.length)]
    return sorteado
}
function sortear_caracter(){
    let sorteado = caracteres[Math.floor(Math.random() * caracteres.length)]
    return sorteado
}

function misturar_senha(){
    const lista = []
    if (maiusculas_elemento.checked) {
        lista.push(sortear_maiusculas())
    }
    if (minusculas_elemento.checked) {
        lista.push(sortear_minusculas())
    }
    if (numeros_elemento.checked) {
        lista.push(sortear_numeros())
    }
    if (caracteres_elemento.checked) {
        lista.push(sortear_caracter())
    }
    if (lista.length === 0 ){
        return ''
    }
    return lista[Math.floor(Math.random() * lista.length)]
}

gerar_senha_elemento.addEventListener('click', gerar_senha)

copiar_elemento.addEventListener('click', () => {
    const area_texto = document.createElement('textarea')
    const pw = senha_elemento.innerText

    if(!pw) {
        return
    }

    area_texto.value = pw
    document.body.appendChild(area_texto)
    area_texto.select()
    document.execCommand('copy')
    area_texto.remove()
    window.alert('Senha Copiada com sucesso!!!')
})