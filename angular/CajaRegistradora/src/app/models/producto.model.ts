export class Producto {

    nombre: string;
    imagen: string;
    precio: number;

    constructor(pNombre: string, pImagen: string, pPrecio: number) {
        this.nombre = pNombre;
        this.imagen = pImagen;
        this.precio = pPrecio;
    }

}