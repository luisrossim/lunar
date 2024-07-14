import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilitiesService } from './utilities.service';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private utilitiesService: UtilitiesService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.utilitiesService.setLoading(true);
  
    return next.handle(req).pipe(
      finalize(() => {
        this.utilitiesService.setLoading(false);
      })
    );
  }
}
