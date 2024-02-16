import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  
  

  nombre?: string;

  constructor(private _servicioFamiliar: ServicioFamiliarService
  ) { }


  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeno('Juan');
    this.nombre = this._servicioFamiliar.getHermanoPequeno();
  }


  mensajeRecibido: string = '';

  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }


    
  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
   }


  //CONTADOR
  valorContador: number = 0;

  incrementar() {
    this.valorContador++;
  }
  decrementar() {
    this.valorContador--;
  }

}
