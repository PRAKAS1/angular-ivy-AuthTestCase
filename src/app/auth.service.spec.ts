import { Component, Injectable } from "@angular/core";
import { of } from "rxjs";
import { AuthService } from "./auth.service";

@Component({
  template: '',
})
class TestLoginComponent {} // [8]

@Injectable()
class FakeAuthService implements AuthService {
  // [9]
  isLoggedIn = false; // [10]
  redirectUrl: string; // [10]

  login() {
    // [11]
    this.isLoggedIn = true;

    return of(true);
  }

  logout() {
    // [11]
    this.isLoggedIn = false;
  }
}