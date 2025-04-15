import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { endpoints } from '../../../configurations/environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  mensagem: string = '';
  erros: any = null;

  //CONSTRUCTOR INIT FOR HTTP CLIENT
  constructor(private http: HttpClient, private router: Router) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  //FUNÇÃO PARA CAPTURAR O EVENTO SUBMIT DO FORMULÁRIO
  onSubmit() {
    this.mensagem = '';
    this.erros = null;

    this.http.post(endpoints.auth_usuario, this.form.value).subscribe({
      next: (data: any) => {
        sessionStorage.setItem('usuario', JSON.stringify(data));
        this.router.navigateByUrl('/dashboard');
      },
      error: (e: any) => {
        this.mensagem = typeof e.error === 'string' ? e.error : '';
        console.log(this.mensagem + 'aaaa');
        this.erros = typeof e.error !== 'string' ? e.error : null;
        console.log(this.erros);
      },
    });
  }
}
