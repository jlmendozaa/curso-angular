import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  constructor(private _servicioFamiliar : ServicioFamiliarService
  ){}

  @Output() mensajeDesdeHijo =  new EventEmitter<string>();
  @Output() decrementarDesdeHijo =  new EventEmitter<void>();
  @Output() incrementarDesdeHijo =  new EventEmitter<void>();

  mensaje: string = '';

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

  preguntar(){
   console.log(this._servicioFamiliar.preguntarPorHijo());
  }

  incrementar(){
    this.incrementarDesdeHijo.emit();
  }
  decrementar(){
    this.decrementarDesdeHijo.emit();
  }

}
