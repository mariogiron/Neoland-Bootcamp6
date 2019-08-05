export class Empleado {

    nombre: string;
    apellidos: string;
    dni: string;
    departamento: string;

    constructor(pNombre = '', pApellidos = '', pDni = '', pDepartamento = '') {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.dni = pDni;
        this.departamento = pDepartamento;
    }
}