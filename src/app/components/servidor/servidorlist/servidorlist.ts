import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Servidor } from '../../../models/servidor';
import Swal from 'sweetalert2';
import { MdbModalService, MdbModalRef, MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { CommonModule } from '@angular/common';
import { ServidorDetailsComponent } from "../servidordetails/servidordetails";

@Component({
  selector: 'app-servidorlist',
  standalone: true,
  imports: [CommonModule, RouterLink, MdbModalModule, ServidorDetailsComponent],
  templateUrl: './servidorlist.html',
  styleUrls: ['./servidorlist.scss']
})
export class Servidorlist {

  modalService = inject(MdbModalService);
  @ViewChild('modalServidorDetails') modalServidorDetails!: TemplateRef<any>;
  
   servidorEdit: Servidor = new Servidor(0, '', '', '', '', new Date(), '');

  
  modalRef!: MdbModalRef<any>;

  lista: Servidor[] = [];
  
  constructor(private router: Router) {
    this.lista = [
      new Servidor(1, 'João Silva', '12345', 'Analista', 'TI', new Date(), "Concursado"),
      new Servidor(2, 'Maria Souza', '67890', 'Desenvolvedor', 'TI', new Date(), "Comissionado"),
      new Servidor(3, 'Carlos Pereira', '54321', 'Gerente', 'RH', new Date(), "Concursado")
    ];

    const navigation = this.router.getCurrentNavigation();
    const servidorNovo = navigation?.extras?.state?.['servidorNovo'];
    const servidorEditado = navigation?.extras?.state?.['servidorEditado'];

    if (servidorEditado) {
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

    if (servidorNovo) {
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

  new() {
    this.servidorEdit = new Servidor(0, '', '', '', '', new Date(), '');
    this.modalRef = this.modalService.open(this.modalServidorDetails, {
      modalClass: 'modal-lg'
    });
  }
  edit(servidor: Servidor) {
    this.servidorEdit = Object.assign({}, servidor); //clona o obj para evitar ref do obj
      this.modalRef =  this.modalService.open(this.modalServidorDetails, {
        
    });
    //this.modalRef =  this.modalService.open(this.modalServidorDetails);
  }
  retornoDetalhe(servidor: Servidor) {
    if (servidor.id > 0) {
      let indice = this.lista.findIndex(s => s.id === servidor.id);
      this.lista[indice] = servidor;
    } else{
      servidor.id = this.lista.length + 1;
      this.lista.push(servidor);
    }
      this.modalRef.close();

  }

}
