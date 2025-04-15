import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  collapsed = false;
  nome = '';
  perfis: string[] = [];
  menuItems: any[] = [];
  logado = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const data = sessionStorage.getItem('usuario');
    if (data) {
      this.logado = true;
      const usuario = JSON.parse(data);
      this.nome = usuario.nome;
      this.perfis = usuario.perfis;

      this.configurarMenu(this.perfis); // usando o primeiro perfil
    }
  }

  configurarMenu(perfis: string[]) {
    const baseMenu = [
      { label: 'Dashboard', icon: 'fas fa-home', route: '/dashboard' },
    ];

    const adminMenu = [
      { label: 'Usuários', icon: 'fas fa-users', route: '/usuarios' },
      { label: 'Todos os Chamados', icon: 'fas fa-list', route: '/alltickets' },
      { label: 'Opções', icon: 'fas fa-cog', route: '/configuracoes' },
    ];

    const tecnicoMenu = [
      {
        label: 'Meus Chamados',
        icon: 'fas fa-wrench',
        route: '/mytickets',
      },
      { label: 'Atividades', icon: 'fas fa-tasks', route: '/atividades' },
    ];

    const clienteMenu = [
      { label: 'Abrir Chamado', icon: 'fas fa-plus', route: '/ticket' },
      {
        label: 'Meus Chamados',
        icon: 'fas fa-ticket-alt',
        route: '/mytickets',
      },
    ];

    this.menuItems = [...baseMenu];

    const addedRoutes = new Set<string>(); // evita itens duplicados

    if (perfis.includes('ADMIN')) {
      adminMenu.forEach((item) => {
        if (!addedRoutes.has(item.route)) {
          this.menuItems.push(item);
          addedRoutes.add(item.route);
        }
      });
    }

    if (perfis.includes('TECNICO')) {
      tecnicoMenu.forEach((item) => {
        if (!addedRoutes.has(item.route)) {
          this.menuItems.push(item);
          addedRoutes.add(item.route);
        }
      });
    }

    if (perfis.includes('CLIENTE')) {
      clienteMenu.forEach((item) => {
        if (!addedRoutes.has(item.route)) {
          this.menuItems.push(item);
          addedRoutes.add(item.route);
        }
      });
    }

    // Logout (sempre)
    this.menuItems.push({
      label: 'Logout',
      icon: 'fas fa-sign-out-alt',
      route: '#',
      action: () => this.logout(),
    });
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  logout() {
    Swal.fire({
      title: 'Tem certeza que deseja sair?',
      text: 'Você não poderá reverter essa ação!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, sair!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem('usuario');
        this.router.navigateByUrl('/login');
      }
    });
  }
}
