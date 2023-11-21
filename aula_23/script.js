const poke_name = document.querySelector('.name-poke')
const poke_number = document.querySelector('.num-poke')
const poke_img = document.querySelector('.poke_img')
const form = document.querySelector('.formulario')
const input = document.querySelector('.input-search')
const btn_anterior = document.querySelector('.btn-anterior')
const btn_proximo = document.querySelector('.btn-proximo')

let id_pokemon = 1


const fetch_pokemon = async (pokemon) => {
    api_response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(api_response)
    if (api_response.status === 200) {
        const data = api_response.json()
        return data
    }
}
// fetch_pokemon('pikachu')
const render_pokemon = async (pokemon) => {
    poke_name.innerHTML = 'Pesquisando...'
    poke_number.innerHTML = ''

    const info = await fetch_pokemon(pokemon)
    if (info) {
        poke_img.src = info['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        poke_img.style.display = 'block'
        poke_name.innerHTML = info.name
        poke_number.innerHTML = info.id
        id_pokemon = info.id
        input.value = ''
    }
    else {
        poke_img.style.display = 'none'
        poke_name.innerHTML = 'Não encontrado'
        poke_number.innerHTML = ''
        input.value = ''
    }
}

form.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    let pokemon = input.value.toLowerCase()
    render_pokemon(pokemon)

})

btn_anterior.addEventListener('click', ()=> {
    if (id_pokemon > 1) {
        id_pokemon -= 1
        render_pokemon(id_pokemon)
    }
})
btn_proximo.addEventListener('click', () => {
    if (id_pokemon > 1) {
     id_pokemon += 1
        render_pokemon(id_pokemon)
    }

})

render_pokemon(id_pokemon)