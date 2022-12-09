import { Observable, throwError } from "rxjs";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { UsersService } from "../../userServices/users.service";
import { Router } from "@angular/router";

@Injectable()
export class HttpInterceptorServiceService implements HttpInterceptor {
  constructor(private usersService: UsersService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Accept: "application/json",
        Authorization: `Bearer ` + localStorage.getItem("token"),
      },
    });
    console.log(req);
    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.usersService.logout();
        }
        if (err.status === 403) {
          this.router.navigate(["errors/forbidden"]);
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
