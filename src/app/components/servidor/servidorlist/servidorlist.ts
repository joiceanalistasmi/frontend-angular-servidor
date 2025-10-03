import { Component } from '@angular/core';
import { Servidor } from '../../../models/servidor';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-servidorlist',
  imports: [RouterLink],
  templateUrl: './servidorlist.html',
  styleUrl: './servidorlist.scss'
})
export class Servidorlist {

  lista: Servidor[] = [];
   
  constructor() {
    this.lista.push(new Servidor(1, 'Jurema', '12345', 'Analista', 'TI', new Date()));
  }
  delete(){}

  deleteItem(){}
}
