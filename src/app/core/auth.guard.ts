import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) return true;

  return router.createUrlTree(['/login']);
};


















// Q: Why use createUrlTree instead of navigate?

// Answer:

// Because guards should return navigation instruction instead of triggering navigation manually.

// Q: Functional guard vs class-based guard difference?

// Functional guard:

// ✔ Cleaner
// ✔ Less boilerplate
// ✔ Standalone compatible

// Q: When does canActivate run?

// Before route loads.