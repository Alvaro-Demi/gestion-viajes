import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div>
      <h1>MIS VIAJES</h1>
      <nav>
        <button routerLink="/mis-viajes">Mis Viajes</button>
        <button routerLink="/nuevo-viaje">Nuevo Viaje</button>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    div {
      padding: 20px;
    }
    h1 {
      text-align: center;
    }
    nav {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin: 20px 0;
    }
    button {
      padding: 10px 20px;
    }
  `]
})
export class AppComponent {} 