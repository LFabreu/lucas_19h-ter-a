const URL_BASE = 'https://restcountries.com/v3.1/name/'

const FORM = document.querySelector('.conteudo-pesquisa')
const ENTRADA = document.querySelector('.search')
const NOME = document.querySelector('.nome-oficial')
const BANDEIRA = document.querySelector('.bandeira')
const TERRITORIO = document.querySelector('.territorio')
const CAPITAL = document.querySelector('.capital')
const CONTINENTE = document.querySelector('.continente')
const SUB_REGIAO = document.querySelector('.sub-regiao')
const SIGLA = document.querySelector('.sigla')
const POPULAÇÂO = document.querySelector('.Idioma')


let fetch_country = async(country) =>{
    const response = await fetch(URL_BASE + country)
    if (response.status == 200) {
        const INFO = response.json()
        return INFO
    }
}

const render_country = async(countries) => {
    const info = await fetch_country(countries)
    if (info) {
        NOME.innerHTML = (info[0].name.official)
        SIGLA.innerHTML = (info[0].fifa)
        CONTINENTE.innerHTML = (info[0].region)
        CAPITAL.innerHTML = (info[0].capital)
        TERRITORIO.innerHTML = (info[0].area)
        SUB_REGIAO.innerHTML = (info[0].subregion)
        POPULAÇÂO.innerHTML = (info[0].population)
        BANDEIRA.src = (info[0].flags['svg'])
        console.log(info)
    }
}



render_country('Portugal')

/**
 * o que trazer de informação
 * 
 * extensão terrirorial
 * bandeira
 * capital
 * continente
 * sub-região
 * sigla
 * idioma
 *  
 *
 */