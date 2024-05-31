import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div style="width: 400px">
      <form (ngSubmit)="handleLogin()">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            [(ngModel)]="email"
            name="emailInput"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            [(ngModel)]="password"
            name="passwordInput"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-check text-start my-3">
          <input
            class="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
    </div>
  `,
  styles: [],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) {}

  handleLogin() {
    const loginCredentials = {
      email: this.email,
      password: this.password,
    };
    console.log(loginCredentials);

    this.authService.login(loginCredentials).subscribe((res: any) => {
      console.log(res);
      sessionStorage.setItem('bearer_token', res.token);
      const redirecToUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
      console.log(redirecToUrl);
      this.router.navigateByUrl(redirecToUrl);
    });
  }
}
