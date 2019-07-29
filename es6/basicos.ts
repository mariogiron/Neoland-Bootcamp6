let cadena: string = 'Hola Mundo';
let numero: number = 4;
let siNo: boolean = true;

let arrMensajes: Array<string> = ['uno', 'dos', 'tres']
let arrNumeros: number[] = [1, 2, 3, 4, 5];

let noImporta: any = {
    nombre: 'Pepe',
    apellidos: 'García'
}

function sumar(pNum1: number, pNum2: number): number {
    return pNum1 + pNum2;
}
sumar(4, 4);