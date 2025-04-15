import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { endpoints } from '../../../configurations/environments';

@Component({
  selector: 'app-ticket',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  tipos: any[] = [];
  erros: any = null;
  mensagem: string = '';

  ngOnInit() {}

  constructor(private http: HttpClient) {}

  form = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    tipoChamado: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(`dados enviados: ${this.form.value.tipoChamado}`);

    // fazendo a requisição POST para API
    this.http
      .post(`${endpoints.criar_chamado}`, this.form.value, {
        responseType: 'text',
      })
      .subscribe({
        //aguardando o retorno da API
        next: (data) => {
          // se a req for bem sucedida
          //limpar o erros
          this.erros = null;

          //capturar a msg de sucesso da api
          this.mensagem = data;

          //zerar os formulário
          this.form.reset();
        },
        error: (e) => {
          // se a requisição falhar
          try {
            this.erros = typeof e.error === 'string' ? JSON.parse(e.error) : e.error;
          } catch {
            this.erros = { error: 'Erro inesperado ao processar resposta do servidor.' };
          }
          this.mensagem = '';
        },
      });
  }
}
