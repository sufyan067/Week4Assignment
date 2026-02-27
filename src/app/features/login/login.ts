import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  username = signal('');
  password = signal('');
  error = signal('');

  private auth=inject(AuthService);
  private router=inject(Router);

  onLogin() {
    this.error.set('');
    const ok = this.auth.login(this.username(), this.password());

    if (!this.username() || !this.password()) {
      this.error.set('Username and password are required');
      return;
    }
    
    
    if (!ok) {
      this.error.set('Username or password is incorrect.');
        alert('Username or password is incorrect.');

      return;
    }
    //alert('You are Loged in')
    this.router.navigateByUrl('/dashboard');

  }
  
  
  
  
  onUsernameInput(ev: Event) {
      const value = (ev.target as HTMLInputElement).value;
      this.username.set(value);
    }

    onPasswordInput(ev: Event) {
      const value = (ev.target as HTMLInputElement).value;
      this.password.set(value);
    }


}
