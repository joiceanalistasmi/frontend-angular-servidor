import { Component, inject, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { Servidor } from '../../../models/servidor';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { MdbModalModule, MdbModalRef } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-servidorlist',
  imports: [RouterLink , MdbModalModule],
  templateUrl: './servidorlist.html',
  styleUrls: ['./servidorlist.scss'] // CORRIGIDO AQUI
})
export class Servidorlist {

  //ELEMENTOS MODAL
  modalService = inject(MdbModalModule);
  @ViewChild('modalServidorDetails') modalServidorDetails!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista: Servidor[] = [];

  constructor() {
    const servidorNovo = history.state.servidorNovo;
    const servidorEditado = history.state.servidorEditado;

    if (servidorEditado != null) {
      const indice = this.lista.findIndex(s => s.id === servidorEditado.id);
      if (indice !== -1) {
        this.lista[indice] = servidorEditado;
        Swal.fire({
          title: 'Sucesso!',
          text: 'Editado com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      }
    }

    if (servidorNovo != null) {
      servidorNovo.id = this.lista.length + 1;
      this.lista.push(servidorNovo);
      Swal.fire({
        title: 'Sucesso!',
        text: 'Cadastrado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    }
  }

  deleteById(servidor: Servidor) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você tem certeza que deseja deletar?',
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,  
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        const indice = this.lista.findIndex(s => s.id === servidor.id);
        if (indice !== -1) {
          this.lista.splice(indice, 1);  

          Swal.fire({
            title: 'Deletado com sucesso!',
            icon: 'success',  
            confirmButtonText: 'Ok'
          });
        }
      }
    });
  }
}
