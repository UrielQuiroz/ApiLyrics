import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then( rpta => rpta.json() )
            .then( result => {

                if(result.lyrics){
                    const { lyrics } = result;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResult.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                }
                else {
                    UI.divResultado.textContent = `La canción no existe, prueba con otra busqueda`;
                    UI.divMsj.classList.add('error');

                    setTimeout(() => {
                        UI.divResultado.textContent = ``;
                        UI.divMsj.classList.remove('error');
                    }, 3000);
                }


            })

    }
}

export default API;