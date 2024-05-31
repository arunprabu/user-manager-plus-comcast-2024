import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  /* check whether user is authenticated or not */
  /* if yes 
    return true;
    else 
    return false;
  */
  
  console.log(route);
  console.log(state);

  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    // if not auth
    router.navigate(['auth/login'], {
      queryParams: {
        redirectTo: state?.url,
      },
    });
    return false;
  }
  
};
