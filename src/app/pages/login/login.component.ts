import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// Importaciones Angular Material necesarias
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    MatIconModule,              // 👈 Para <mat-icon>
    MatProgressSpinnerModule    // 👈 Para <mat-spinner>
  ],
})
export class Login {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.loading = true;

      const { username, password } = this.loginForm.value;
      console.log('Login con:', username, password);

      // Simula validación asincrónica
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/']);
      }, 1500);
    }
  }
}
