export class Post {

    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;
    categoria: string;

    constructor(pTitulo, pTexto, pAutor, pImagen, pCategoria) {
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = new Date();
        this.categoria = pCategoria;
    }
}