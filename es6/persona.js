class Persona {

    constructor(pNombre, pEdad, pSexo) {
        this._nombre = pNombre;
        this.edad = pEdad;
        this.sexo = pSexo;
        this.activo = true;
    }

    get nombre() {
        console.log('recupero el nombre');
        return this._nombre.toUpperCase();
    }

    set nombre(value) {
        console.log('Nombre: ', `Valor Anterior: ${this._nombre} | Valor Actual: ${value}`);
        this._nombre = value;
    }

    hablar() {
        return 'Hola Mundo!';
    }

    mostrar() {
        return `Hola soy ${this.nombre} y tengo ${this.edad} años`;
    }

}

class Adulto extends Persona {

    constructor(pNombre, pEdad, pSexo, pCoche) {
        super(pNombre, pEdad, pSexo);
        this.coche = pCoche;
    }

}

let pers = new Persona('Mario', 24, 'M');
let pers2 = new Persona('Ana Rosa', 60, 'F');

console.log(pers2);

console.log(pers.hablar());
console.log(pers2.mostrar());

let adul = new Adulto('Pepe', 32, 'M', true);
console.log(adul.mostrar());
console.log(adul.nombre);

adul.nombre = 'Mariano';

console.log(adul.nombre);