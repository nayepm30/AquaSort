import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class Contactanos {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Mensaje enviado:', this.contactForm.value);
      this.contactForm.reset();
      alert('¡Gracias por contactarnos! Pronto te responderemos.');
    }
  }
}
