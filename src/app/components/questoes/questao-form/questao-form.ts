import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Questao } from '../../../models/questao';
import { QuestaoServices } from '../../../services/questao-services'; 
import Swal from 'sweetalert2'; 
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-questoes-form',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: '../../questoes/questao-form/questao-form.html',
  styleUrls: ['../../questoes/questao-form/questao-form.scss']
})
export class QuestoesFormComponent {

  @Input("questao") questao: Questao = new Questao();
  @Output("retorno") retorno = new EventEmitter();

  rotaAtivida = inject(ActivatedRoute);
  roteador = inject(Router);
  questaoService = inject(QuestaoServices);

  constructor() {
    const id = this.rotaAtivida.snapshot.params['id'];
    if (id) {
      this.findById(id);
    }
  }

   findById(id: number) {
    this.questaoService.findById(id).subscribe({
      next: (retorno) => {
          this.questao = retorno;
      },
     error: (erro) => Swal.fire(erro.error, '', 'error')
    });
  }
  
  save() {
    if (this.questao.id > 0) {
      this.questaoService.update(this.questao, this.questao.id).subscribe({
        next: (mensagem) => {
          Swal.fire(mensagem, '', 'success');
          this.roteador.navigate(['admin/questoes']);
          this.retorno.emit("OK");
        },
        error: (erro) => Swal.fire(erro.error, '', 'error')
      });
    } else {
      this.questaoService.save(this.questao).subscribe({
        next: (mensagem) => {
          Swal.fire(mensagem, '', 'success');
          this.roteador.navigate(['admin/questoes']);
          this.retorno.emit("OK");
        },
        error: (erro) => Swal.fire(erro.error, '', 'error')
      });
    }
  }
}
