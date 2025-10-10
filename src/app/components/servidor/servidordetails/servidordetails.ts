import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { Servidor } from '../../../models/servidor';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';  
import Swal from 'sweetalert2';
import { ServidorService } from '../../../services/servidor';

@Component({
  selector: 'app-servidordetails',
  standalone: true, 
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './servidordetails.html',
  styleUrls: ['./servidordetails.scss'] 
})
export class ServidorDetailsComponent {  

  @Input("servidor") servidor: Servidor = new Servidor();
  @Output("retorno") retorno = new EventEmitter<any>();

  private activatedRoute = inject(ActivatedRoute);  
  private router = inject(Router);
  private servidorService = inject(ServidorService);

  constructor() {
    const id = +this.activatedRoute.snapshot.params['id']; // forçando number
    if (id > 0) {
      this.findById(id);
    }
  }

 findById(id: number) { 
    this.servidorService.findById(id).subscribe({
      next: retorno => {
         this.servidor = retorno;
      },
      error: erro => {
        Swal.fire({
          title: 'Erro!', 
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  }

  save() {
   
    if (this.servidor.data_admissao instanceof Date){
      this.servidor.data_admissao = formatarData(this.servidor.data_admissao as Date)
    }

    if (this.servidor.id > 0) {
      this.servidorService.update(this.servidor, this.servidor.id).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',  
            confirmButtonText: 'Ok'
          })
              this.router.navigate(['admin/servidorlist'], {
              state: { servidorEditado: this.servidor }
            });
          this.retorno.emit(this.servidor);
        },
        error: erro => {
          Swal.fire({
            title: 'Erro!',
            icon: 'error',  
            confirmButtonText: 'Ok',
          });
        }
      });

    } else {
      
      this.servidorService.save(this.servidor).subscribe({
        next: mensagem => {
          Swal.fire({
            title: 'Sucesso!',
            text: 'Cadastrado com sucesso!',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
            this.router.navigate(['admin/servidorlist'], {
              state: { servidorNovo: this.servidor } });
            this.retorno.emit(this.servidor);
        },
        error: erro => {
          Swal.fire({
            title: 'Ocorreu um Erro na gravação!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      });
    }  
  }

  
} 
export function formatarData(data: Date): string {
  return data.toISOString().split('T')[0];
}