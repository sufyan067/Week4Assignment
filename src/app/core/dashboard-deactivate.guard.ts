import { CanDeactivateFn } from '@angular/router';

export const dashboardDeactivateGuard: CanDeactivateFn<any> = (
  component
) => {

  if (component.isLoggingOut) {
    return confirm('Are you sure you want to logout?');
  }

  return true;
};
