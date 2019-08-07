export class Pregunta {
    texto: string;
    respuestas: string[];
    respuestaCorrecta: number;

    constructor(pTexto: string, pRespuestas: string[], pRespuestaCorrecta: number) {
        this.texto = pTexto;
        this.respuestas = pRespuestas;
        this.respuestaCorrecta = pRespuestaCorrecta;
    }
}