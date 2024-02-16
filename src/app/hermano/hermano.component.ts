import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit {
  nombre?: string;

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Pedro');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }


  constructor(private _servicioFamiliar : ServicioFamiliarService
  ){}

    
  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
  }


  
  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
   }


}
