import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { endpoints } from '../../../configurations/environments';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  usuarios: any[] = [];
  erros: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${endpoints.listar_usuarios}`).subscribe({
      next: (data) => {
        this.usuarios = data as any[];
      },
      error: (e) => {
        this.erros = e;
      },
    });
  }
}
