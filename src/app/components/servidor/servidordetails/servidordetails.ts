import { Component, inject } from '@angular/core';
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { Servidor } from '../../../models/servidor';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';  
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servidordetails',
  standalone: true, 
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './servidordetails.html',
  styleUrls: ['./servidordetails.scss'] 
})
export class ServidorDetailsComponent {  
  servidor: Servidor = new Servidor(0, '', '', '', '', new Date(), '');
  router = inject(ActivatedRoute);  
  router2 = inject(Router);

  constructor() {
    const id = +this.router.snapshot.params['id']; // forçando number
    if (id > 0) {
      this.findById(id);
    }
  }

  save() {
    if (this.servidor.id > 0) {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Editado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      
      this.router2.navigate(['admin/servidorlist'], {
        state: { servidorEditado: this.servidor }
      });
    } else {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Cadastrado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.router2.navigate(['admin/servidorlist'], {
        state: { servidorNovo: this.servidor }
      });
    }
  }

  findById(id: number) { 
    const servidoretornado = 
    new Servidor(id, 'Jurema', '12345', 'Analista', 'TI', new Date(), "Concursado");
    this.servidor = servidoretornado;
  }
}
