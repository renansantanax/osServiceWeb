import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  idiomaSelecionado: string = 'pt';
  notificacoesAtivas: boolean = true;

  constructor(public themeService: ThemeService) {}

  alternarTema(): void {
    this.themeService.toggleTheme();
  }

  alterarIdioma(idioma: string) {
    this.idiomaSelecionado = idioma;
    localStorage.setItem('idioma', idioma);
  }

  alternarNotificacoes() {
    this.notificacoesAtivas = !this.notificacoesAtivas;
    localStorage.setItem('notificacoes', this.notificacoesAtivas ? 'on' : 'off');
  }
}
