import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMockupService } from '../../../../core/mockup-api/auth-mockup.service';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthMockupService,
    private router: Router,) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response) {
        this.router.navigate(['/feature/dashboard']);
        console.log('Login successful', response);
        // Handle successful login here
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    }, error => {
      console.error('Login failed', error);
      this.errorMessage = 'Login failed. Please try again later.';
    });
  }

}
