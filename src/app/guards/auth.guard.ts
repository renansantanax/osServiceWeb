import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  //construtor para injeção de dependência
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //consultar os dados do usuário gravado na session storage
    const usuario = localStorage.getItem('usuario');
    //verificando se não existe um usuário autenticado
    if (!usuario) {
      //redirecionar de volta para a página de login
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
