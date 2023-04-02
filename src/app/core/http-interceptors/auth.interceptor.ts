import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken();
    let request: HttpRequest<any> = req;

    if (token) {
      request = req.clone({
        withCredentials: false,
        headers: req.headers.set(
          'Authorization',
          `Bearer ${token}`
        ),
      });
    }

    const bindedHandleError = this.handleUnauthorizedError.bind(this);
    return next.handle(request).pipe(catchError(bindedHandleError));
  }

  private handleUnauthorizedError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.router.navigate(['/auth']);
    }
    return throwError(() => error);
  }

}
