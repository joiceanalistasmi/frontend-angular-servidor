import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Servidor } from '../../../models/servidor';
import Swal from 'sweetalert2';
import { MdbModalService, MdbModalRef, MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { CommonModule } from '@angular/common';
import { ServidorDetailsComponent } from "../servidordetails/servidordetails";
import { ServidorService } from '../../../services/servidor';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-servidorlist',
  standalone: true,
  imports: [
    CommonModule,
    MdbModalModule,
    ServidorDetailsComponent,
    HttpClientModule,  
  ],
  templateUrl: './servidorlist.html',
  styleUrls: ['./servidorlist.scss']
})
export class Servidorlist implements OnInit {
  modalService = inject(MdbModalService);
  servidorService = inject(ServidorService);

  @ViewChild('modalServidorDetails') modalServidorDetails!: TemplateRef<any>;

  servidorEdit: Servidor = new Servidor();

  modalRef!: MdbModalRef<any>;

  lista: Servidor[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.findAll();

    const navigation = this.router.getCurrentNavigation();
    const servidorNovo = navigation?.extras?.state?.['servidorNovo'];
    const servidorEditado = navigation?.extras?.state?.['servidorEditado'];

    if (servidorEditado) {
      const indice = this.lista.findIndex(s => s.id === servidorEditado.id);
      if (indice !== -1) {
        this.lista[indice] = servidorEditado;
        Swal.fire('Sucesso!', 'Editado com sucesso!', 'success');
      }
    }

    if (servidorNovo) {
      this.lista.push(servidorNovo);
      Swal.fire('Sucesso!', 'Cadastrado com sucesso!', 'success');
    }
  }

  findAll() {
    this.servidorService.findAll().subscribe({
      next: (lista) => this.lista = lista,
      error: (erro) => console.error(erro)
    });
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
          Swal.fire('Deletado com sucesso!', '', 'success');
        }
      }
    });
  }
 
  new() {
    this.servidorEdit = new Servidor();
    this.modalRef = this.modalService.open(this.modalServidorDetails, {
      modalClass: 'modal-lg'
    });
  }

  edit(servidor: Servidor) {
    this.servidorEdit = Object.assign({}, servidor); // evita ligação direta com o objeto original
    this.modalRef = this.modalService.open(this.modalServidorDetails);
  }

  retornoDetalhe(servidor: Servidor) {
    this.findAll();
    this.modalRef.close();
  }
 
}
