import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { osservice } from '../configurations/environments';
import { catchError, switchMap, throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  const usuario = auth.getUsuario();

  // só intercepta requisições para sua API
  if (req.url.includes(osservice) && usuario?.token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${usuario.token}`,
      },
    });

    return next(authReq).pipe(
      catchError((err) => {
        if (err.status === 401 && usuario.refreshToken) {
          // tenta renovar o token
          return auth.refreshTokenRequest().pipe(
            switchMap((res: any) => {
              // Verifica se já existe dados do usuário
              const usuarioAtual = auth.getUsuario();

              // Reconstrói o objeto completo com id, email, nome, perfis e os tokens
              const usuarioAtualizado = {
                ...usuarioAtual, // mantém os dados atuais como nome, email, etc
                token: res.token,
                refreshToken: res.refreshToken,
              };

              auth.setUsuario(usuarioAtualizado);

              const retryReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${res.token}`,
                },
              });

              return next(retryReq);
            }),
            catchError(() => {
              auth.clear();
              auth.router.navigate(['/login']);
              return throwError(() => err);
            })
          );
        }

        return throwError(() => err);
      })
    );
  }

  return next(req);
};
