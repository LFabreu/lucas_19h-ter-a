const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const conteudo = document.getElementById('conteudo')
const form = document.getElementById('formulario')
const pesquisa = document.getElementById('pesquisa')


pegar_filmes(APIURL)

async function pegar_filmes(url) {
    const resp = await fetch(url)
    const resp_info = await resp.json()

    mostrar_filmes(resp_info.results)
}

function mostrar_filmes(catalogo) {
    conteudo.innerHTML = ''

    catalogo.forEach(filme => {
        const {
            poster_path, title, vote_average
        } = filme
        const filme_elemento = document.createElement('div')
        filme_elemento.classList.add('filme')

        filme_elemento.innerHTML = `
        <img
        src="${IMGPATH + filme.poster_path}"
        alt="${filme.title}"
        >
        <div class="filme-info">
            <h3> ${filme.title}</h3>
            <span class="${cor_nota(filme.vote_average)}"> ${filme.vote_average}⭐</span>
        </div>
    `

        conteudo.appendChild(filme_elemento)
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto_pesquisado = pesquisa.value
    if (texto_pesquisado) {
        pegar_filmes(SEARCHAPI + texto_pesquisado)
        pesquisa.value = ''
    }
})

function cor_nota(nota){
    if (nota >= 7) {
        return 'green'
    }
    else if (nota >= 5) {
        return 'yellow'
    }
    else {
        return 'red'
    }
}