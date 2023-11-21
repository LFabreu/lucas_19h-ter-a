const URL_BASE = 'https://restcountries.com/v3.1/name/'

let fetch_country = async(country) =>{
    const response = await fetch(`${URL_BASE}${country}`)
    if (response.status == 200) {
        const INFO = response.json
    }
}

fetch_country('Brazil')

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