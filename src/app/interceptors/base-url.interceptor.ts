import { Injectable } from '@angular/core';
import { APIConstant } from '../constants/api-constant';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      url: `${APIConstant.BASE_URL}${request.url}`, // base url'e istek URL'sini ekleyin
    });
    return next.handle(request);
  }
}
