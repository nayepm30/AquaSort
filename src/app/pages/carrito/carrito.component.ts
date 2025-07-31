import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class Carrito {
  checkoutForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', Validators.required],
      reference: [''],
      deliveryNotes: [''],
      paymentMethod: ['cash', Validators.required]
    });
  }

 

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      // Procesar el pago con la información del formulario
      console.log('Datos de envío:', this.checkoutForm.value);
      // Aquí iría la lógica para confirmar el pedido
    } else {
      // Marcar los campos como tocados para mostrar errores
      this.checkoutForm.markAllAsTouched();
    }
  }
}