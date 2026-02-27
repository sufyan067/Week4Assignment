import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = signal(false);
  private allowed = [
    { username: 'Ahmad Ali', password:   'Ahmad@123' },
    { username: 'Bilal Talha', password: 'Bilal@123' }
  ];

  isLoggedIn() {
    return this.loggedIn();
  }

  login(username: string, password: string): boolean {
    const authenticUser=this.allowed.some(u=>u.username===username && u.password===password);
    this.loggedIn.set(authenticUser);
    return authenticUser
  }

  logout() {
    this.loggedIn.set(false);
  }
}

// Authentication state is managed using Signals