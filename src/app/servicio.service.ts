import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private miArregloUnico:Array<string> = [];

  constructor() {

  }

  getMiArreglo(){
    return this.miArregloUnico;
  }

  agregarElemento(mensaje:string){
    this.miArregloUnico.push(mensaje);
  }
}
