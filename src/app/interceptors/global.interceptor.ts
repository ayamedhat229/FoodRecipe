import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
export class GlobalInterceptor implements HttpInterceptor {
  spinner: any;
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('userToken');
    const baseUrl: string = 'https://upskilling-egypt.com:443/api/v1/';
  
    let Headers = request.clone({
      url: baseUrl + request.url,
      setHeaders:{
        'Authorization':`Bearer ${token}`
      }
    })
    return next.handle(Headers)
};
}
