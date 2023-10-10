const média_txt = document.getElementById("nota");
const nome_txt = document.getElementById("nome")
const resultado_txt = document.getElementById("resultado");

function calcular_media() {
    n1 = parseInt(localStorage.getItem("n1"))
    n2 = parseInt(localStorage.getItem("n2"))
    n3 = parseInt(localStorage.getItem("n3"))

    let soma = n1 + n2 + n3
    let media = soma/3
    
    
    if (media >= 5) {
        resultado_txt.innerHTMl = 'aprovado'   
    
    }
    else if (media <= 4) {
        resultado_txt.innerText = "Reprovou"
    }
    else{
        resultado_txt.innerHTML = 'Recuperação'
    }
    média_txt.innerHTML = media
}

function nome() {
    aluno = localStorage.getItem("nome")
    nome_txt.innerHTML = aluno
}

nome()

// function mudar(){
//     nome_txt.innerHTML = nome
// }

calcular_media()