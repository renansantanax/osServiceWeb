import { HttpInterceptorFn } from '@angular/common/http';
import { osservice } from '../configurations/environments';

/*
  Interceptador para que todas as requisições feitas para a API de produtos
  possam enviar o token do usuário autenticado na session storage
*/
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  //verificar se a requisição é para a API de produtos
  if (req.url.includes(osservice)) {
    const data = sessionStorage.getItem('usuario');

    if (data) {
      try {
        const json = JSON.parse(data);
        const request = req.clone({
          setHeaders: {
            Authorization: 'Bearer ' + json.token,
          },
        });

        return next(request);
      } catch (e) {
        console.warn('Erro ao parsear token da sessionStorage:', e);
      }
    }
  }

  return next(req);
};