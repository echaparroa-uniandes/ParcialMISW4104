export class Planta {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  maxima_altura: number;
  clima: string;
  sustrato_siembra: string;
 
  constructor(
    id: number,
    nombre_comun: string,
    nombre_cientifico: string,
    tipo: string,
    maxima_altura: number,
    clima: string,
    sustrato_siembra: string
    ) {
      this.id = id;
      this.nombre_comun = nombre_comun;
      this.nombre_cientifico = nombre_cientifico;
      this.tipo = tipo;
      this.maxima_altura = maxima_altura;
      this.clima = clima;
      this.sustrato_siembra = sustrato_siembra;
    }
 }