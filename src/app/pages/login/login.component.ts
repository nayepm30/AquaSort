import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class Login {
  isRegistering = false;

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  toggleRegister() {
    this.isRegistering = true;
  }

  toggleLogin() {
    this.isRegistering = false;
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login con:', this.loginForm.value);
      // Aquí puedes navegar o validar contra backend
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Registro con:', this.registerForm.value);
      // Aquí puedes enviar datos al backend o registrar
    }
  }
}