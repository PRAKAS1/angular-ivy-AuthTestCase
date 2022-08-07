import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string = '/';

  login(userName: string, password: string): Observable<boolean> {
    console.log(userName);
    console.log(password);
    this.isLoggedIn = userName == 'admin' && password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isLoggedIn ? 'true' : 'false');

    return of(this.isLoggedIn).pipe(
      delay(1000),
      tap((val) => {
        console.log('Is User Authentication is successful: ' + val);
      })
    );
  }

  logout() {
    // [11]
    this.isLoggedIn = false;
  }
}
