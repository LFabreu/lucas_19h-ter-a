var n1=parseInt(prompt("digite a 1ª Nota "));
var n2=parseInt(prompt("digite a 2ª Nota "));
var n3=parseInt(prompt("digite a 3ª Nota "));

let soma = n1 + n2 + n3
let resp = soma / 3

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
    nome.innerHTML = prompt("digite o seu nome")
}

Passou()

mudar();
