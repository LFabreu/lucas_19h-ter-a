const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");

let soma = n1 + n2 + n3
let resp = soma/3

const nome = document.getElementById("nome")
const média = document.getElementById("nota");
const result = document.getElementById("resultado");

function Passou() {
    if (resp >= 5) {
        result.innerHTMl = 'aprovado'   
        
    }
    else if (resp <= 4) {
        result.innerText = "Reprovou"
    }
}
média.innerHTML = resp

function mudar(){
    nome.innerHTML = nome
}

Passou()

mudar();