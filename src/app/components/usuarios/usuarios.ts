import { Component } from '@angular/core';
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { Usuario } from '../../auth/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  imports: [MdbFormsModule,  MdbRadioModule, FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss'
})
export class UsuariosComponent {

  usuarios: Usuario = new Usuario();

  save(){
    console.log('usuario ');
  }
}
