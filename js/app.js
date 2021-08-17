import * as UI from './interfaz.js';

UI.frm.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    //Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    //Validando
    if(artista === '' || cancion === '') {
        UI.divMsj.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMsj.classList.add('error');

        setTimeout(() => {
            UI.divMsj.textContent = '';
            UI.divMsj.classList.remove('error');
        }, 3000);

        remove();
    }
}