import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViajesService, Viaje } from '../../services/viajes.service';

@Component({
  selector: 'app-mis-viajes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="mis-viajes">
      <h2>Mis Viajes</h2>
      <div class="viajes-grid">
        <div class="viaje-card" *ngFor="let viaje of viajes">
          <div class="viaje-header">
            <h3>{{ viaje.origen }} → {{ viaje.destino }}</h3>
          </div>
          <div class="viaje-body">
            <p><strong>Fecha:</strong> {{ viaje.fecha | date:'dd/MM/yyyy' }}</p>
          </div>
        </div>
      </div>
      <div class="no-viajes" *ngIf="viajes.length === 0">
        <p>No tienes viajes guardados</p>
        <button routerLink="/nuevo-viaje">Crear Nuevo Viaje</button>
      </div>
    </div>
  `,
  styles: [`
    .mis-viajes {
      padding: 20px;
    }

    .viajes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .viaje-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.2s;
    }

    .viaje-card:hover {
      transform: translateY(-5px);
    }

    .viaje-header {
      background: #007bff;
      color: white;
      padding: 15px;
    }

    .viaje-header h3 {
      margin: 0;
      font-size: 1.2em;
    }

    .viaje-body {
      padding: 15px;
    }

    .no-viajes {
      text-align: center;
      padding: 40px;
    }

    .no-viajes button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 20px;
    }

    @media (max-width: 768px) {
      .viajes-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class MisViajesComponent implements OnInit {
  viajes: Viaje[] = [];

  constructor(private viajesService: ViajesService) {}

  ngOnInit() {
    this.viajesService.viajes$.subscribe(viajes => {
      this.viajes = viajes;
    });
  }
} 