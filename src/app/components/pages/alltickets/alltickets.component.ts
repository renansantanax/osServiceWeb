import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { endpoints } from '../../../configurations/environments';

@Component({
  selector: 'app-alltickets',
  imports: [CommonModule],
  templateUrl: './alltickets.component.html',
  styleUrl: './alltickets.component.css',
})
export class AllticketsComponent implements OnInit {
  chamados: any[] = [];
  erros: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${endpoints.listar_todos}`).subscribe({
      next: (data) => {
        this.chamados = data as any[];
      },
      error: (e) => {
        this.erros = e;
      },
    });
  }

  formatarStatus(status: string): string {
    const map = {
      ABERTO: 'Aberto',
      EM_ANDAMENTO: 'Em Andamento',
      FINALIZADO: 'Finalizado',
    };
    return status;
  }

  formatarTipo(tipo: string): string {
    const map = {
      DUVIDA: 'Dúvida',
      ERRO: 'Erro',
      SUGESTAO: 'Sugestão',
    };
    return tipo;
  }
}
