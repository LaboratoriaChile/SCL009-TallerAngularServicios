import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(public servicio:ServicioService) { }

  ngOnInit() {
  }

  pushToService(event){
    let textFromInput = event.target.value;
    this.servicio.agregarElemento(textFromInput);
    event.target.value = "";
  }
}
