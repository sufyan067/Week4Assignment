import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  isLoggingOut = false;
 

  constructor(private auth: AuthService, private router: Router) { }



  logout() {
    this.isLoggingOut = true;
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
