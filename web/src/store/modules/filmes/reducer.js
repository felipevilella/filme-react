export default function filmes( state =[], action) {
    switch (action.type) {
        case 'LIST_FILMES':
            return action.listaFilmes;
        case 'FILME_DETALHE':
            return action.filmeDetalhar;
        default:
            return state;
    }
}

