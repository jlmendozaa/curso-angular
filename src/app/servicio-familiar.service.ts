import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande: string = 'Juan';
  hermanoPequeno: string = 'Pedro';


  getHermanoGrande(): string{
    return this.hermanoGrande || '';
  }

  setHermanoGrande(grande:string){
    this.hermanoGrande = grande;
  }

  getHermanoPequeno(): string{
    return this.hermanoPequeno || '';
  }

  setHermanoPequeno(peque:string){
    this.hermanoPequeno = peque;
  }

  saludar(hermano: string) {
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo():string{
    return '¿Como esta tu hijo?';
  }

  constructor() { }
}
