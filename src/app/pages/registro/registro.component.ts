import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class Registro {
  isRegistering = true;
  hidePassword = true;
  hideConfirmPassword = true;

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Formulario Login (se mantiene igual)
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // Nuevo formulario Registro
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Validador de coincidencia de contraseñas
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password?.value !== confirmPassword?.value && confirmPassword?.touched) {
      confirmPassword?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      confirmPassword?.setErrors(null);
      return null;
    }
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
      // Lógica de login
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Registro exitoso:', {
        name: this.registerForm.value.name,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      });
      // Lógica de registro
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}