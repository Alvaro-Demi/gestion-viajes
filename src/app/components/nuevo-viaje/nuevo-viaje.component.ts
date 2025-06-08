import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViajesService } from '../../services/viajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-viaje',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="nuevo-viaje">
      <h2>Crear Nuevo Viaje</h2>
      <form (ngSubmit)="guardarViaje()" #viajeForm="ngForm">
        <div class="form-group">
          <label for="origen">Origen:</label>
          <input 
            type="text" 
            id="origen" 
            name="origen" 
            [(ngModel)]="viaje.origen" 
            required
            #origen="ngModel"
          >
          <div class="error" *ngIf="origen.invalid && origen.touched">
            El origen es requerido
          </div>
        </div>

        <div class="form-group">
          <label for="destino">Destino:</label>
          <input 
            type="text" 
            id="destino" 
            name="destino" 
            [(ngModel)]="viaje.destino" 
            required
            #destino="ngModel"
          >
          <div class="error" *ngIf="destino.invalid && destino.touched">
            El destino es requerido
          </div>
        </div>

        <div class="form-group">
          <label for="fecha">Fecha:</label>
          <input 
            type="date" 
            id="fecha" 
            name="fecha" 
            [(ngModel)]="viaje.fecha" 
            required
            #fecha="ngModel"
          >
          <div class="error" *ngIf="fecha.invalid && fecha.touched">
            La fecha es requerida
          </div>
        </div>

        <button type="submit" [disabled]="viajeForm.invalid">Guardar Viaje</button>
      </form>
    </div>
  `,
  styles: [`
    .nuevo-viaje {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }

    .error {
      color: red;
      font-size: 14px;
      margin-top: 5px;
    }

    button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      width: 100%;
    }

    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .nuevo-viaje {
        padding: 10px;
      }
    }
  `]
})
export class NuevoViajeComponent {
  viaje = {
    origen: '',
    destino: '',
    fecha: ''
  };

  constructor(
    private viajesService: ViajesService,
    private router: Router
  ) {}

  guardarViaje() {
    this.viajesService.agregarViaje(this.viaje);
    this.router.navigate(['/mis-viajes']);
  }
} 