import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Servidor } from '../../models/servidor';

@Component({
  selector: 'app-servidor',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './servidor.html',
  styleUrl: './servidor.scss'
})

export class ServidorComponent {
 servidor: Servidor = new Servidor(0, '', '', '', '', new Date(),'');

  save() {
    alert('Salvo com sucesso!');
  }
  constructor() {}




}
