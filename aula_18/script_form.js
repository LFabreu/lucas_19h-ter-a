const n1_input = document.getElementById("n1_input");
const n2_input = document.getElementById("n2_input");
const n3_input = document.getElementById("n3_input");
const nome_input = document.getElementById("nome_input")
const Form = document.getElementById("formulario")

Form.addEventListener("submit", (e) => {
    e.preventDefault()

    pegar_valores();
})
console.log(nome)

function pegar_valores() {
    const nome = nome_input.value
    const n1 = n1_input.value
    const n2 = n2_input.value
    const n3 = n3_input.value

    // if (nome === "") {
    //     erro_campo(nome_input, "O nome do aluno é obrigatório")
    // }
    // else {
    //     sucesso_campo(nome_input)
    // }

    localStorage.setItem("nome", nome)
    localStorage.setItem("n1", n1)
    localStorage.setItem("n2", n2)
    localStorage.setItem("n3", n3)
    window.location.pathname="./aula_18/resultado.html"
}

function erro_campo(elemento, mensagem){
    const formControl = elemento.parentElement
    const small = formControl.querySelector("small");

    small.innerText = mensagem
    formControl.className = "form-control erro"
}

