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
 servidor: Servidor = new Servidor();

  save() {
    alert('Salvo com sucesso!');
  }
 constructor() {}


formatarDataParaInput(data: string | Date): string {
  const d = new Date(data);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
 

}
