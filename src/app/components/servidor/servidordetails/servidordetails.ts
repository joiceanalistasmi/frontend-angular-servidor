import { Component } from '@angular/core';
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { Servidor } from '../../../models/servidor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servidordetails',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './servidordetails.html',
  styleUrl: './servidordetails.scss'
})
export class Servidordetails {

  servidor: Servidor = new Servidor(0, '', '', '', '', new Date());

  save() {
    alert('Salvo com sucesso!');
  }
  constructor() {}

}
