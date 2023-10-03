const média_txt = document.getElementById("nota");
const nome_txt = document.getElementById("nome")
const resultado_txt = document.getElementById("resultado");

function calcular_media() {
    n1 = localStorage.getItem("n1")
    n2 = localStorage.getItem("n2")
    n3 = localStorage.getItem("n3")

    let soma = n1 + n2 + n3
    let media = soma/3
    
    
    if (media >= 5) {
    result.innerHTMl = 'aprovado'   
    
    }
    else if (media <= 4) {
        result.innerText = "Reprovou"
    }
    else{
        result.innerHTML = 'Recuperação'
    }
    média_txt.innerHTML = media
}



// function mudar(){
//     nome_txt.innerHTML = nome
// }

Passou()

mudar();