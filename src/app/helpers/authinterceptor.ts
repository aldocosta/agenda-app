import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import { Observable} from 'rxjs';

import {  tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /**
     *
     */
    constructor(private http: HttpClient, private router: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let clone =  req.clone({
            setHeaders: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).data}`
            }
        })
        let ok: string;
        
        return next.handle(clone)
        .pipe(
          tap(
            // Succeeds when there is a response; ignore other events
            // event => ok = event instanceof HttpResponse ? 'succeeded' : '',
            (event) => { 
                if(event instanceof HttpErrorResponse){                    
                    console.log(event)
                    this.router.navigate(['/'])
                }
            },
            // Operation failed; error is an HttpErrorResponse
            error =>{
                console.log(error)
                this.router.navigate(['/'])
            }
          ),
          // Log when response observable either completes or errors
          finalize(() => {
            // const elapsed = Date.now() - started;
            // const msg = `${req.method} "${req.urlWithParams}"
            //    ${ok} in ${elapsed} ms.`;
            // this.messenger.add(msg);
          })
        );
    }



}