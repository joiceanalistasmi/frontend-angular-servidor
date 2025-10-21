import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Questao } from '../../../models/questao';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { QuestaoServices } from '../../../services/questao-services';
import { Router } from 'express';
import { QuestoesFormComponent } from "../questao-form/questao-form";
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questao-list',
  imports: [CommonModule, MdbModalModule ],
  templateUrl: './questao-list.html',
  styleUrl: './questao-list.scss'
})
export class QuestaoList {
lista: Questao[] = []; // lista de questões carregadas
questaoEdit!: Questao; // para passar ao modal
modalService = inject(MdbModalService);
questaoServices = inject(QuestaoServices);
@ViewChild('modalQuestaoDetails') modalQuestaoDetails!: TemplateRef<any>;
modalRef!: MdbModalRef<any>;

 constructor(private router: Router) {}

new() {
  this.questaoEdit = new Questao();
  this.modalRef = this.modalService.open(this.modalQuestaoDetails);
}

edit(questao: Questao) {
  this.questaoEdit = { ...questao };
  this.modalRef = this.modalService.open(this.modalQuestaoDetails);
}

deleteById(questao: Questao) {
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
          const indice = this.lista.findIndex(s => s.id === questao.id);
          if (indice !== -1) {
            this.lista.splice(indice, 1);
            Swal.fire('Deletado com sucesso!', '', 'success');
          }
        }
      });
}

retornoDetalhe(event: any) {
  // lógica para tratar o retorno do componente filho
  this.modalRef.close();
}

}
