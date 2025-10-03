import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class Login {

  usuario!: string;
  password!: string;
  router = inject(Router); // injetar o Router, manter a instancia 

  logar() {
    if (this.usuario === 'admin' && this.password === 'admin') {
      this.router.navigate(['/admin/servidor']);
      //redirecionar para servidor
    } else {
      alert('Usuário ou senha incorretos.');
    }
}
  forgotPassword() {
    alert('Função de recuperação de senha não implementada.');
  }
}
