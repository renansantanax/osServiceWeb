import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { endpoints } from '../../../configurations/environments';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mytickets',
  imports: [CommonModule, RouterLink],
  templateUrl: './mytickets.component.html',
  styleUrl: './mytickets.component.css',
})
export class MyticketsComponent {
  chamados: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${endpoints.listar_chamado}`).subscribe({
      next: (data) => {
        this.chamados = data as any[];
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
