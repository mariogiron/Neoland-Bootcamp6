function createMenu({ title, body, buttonText, cancellable }) {
    console.log(title);
}

function createMenuV2(title, body, buttonText, cancellable) {
    console.log(title);
}

createMenuV2('Título abajo', 'Body abajo', 'Boton abajo', true);
let opts = {
    title: 'Título arriba',
    buttonText: 'Boton arriba',
    cancellable: false,
    body: 'Body arriba'
}
createMenu(opts);