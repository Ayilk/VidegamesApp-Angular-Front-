import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router){}

  canActivate(): Observable<boolean > | boolean  {
    console.log('canActivate');

    //Si esto me regresa false, significa que el usuario no esta autenticado y lo voy a sacar de ahí
    return this.authService.validarToken()
    .pipe(
      tap(valid => {
        if(!valid){
          this.router.navigateByUrl('/auth')
        }
      })
    )

  }
  canLoad(): Observable<boolean > | boolean {
    console.log('canLoad');
    return true;
  }
}