import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Viaje {
  id: number;
  origen: string;
  destino: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private viajes = new BehaviorSubject<Viaje[]>([]);
  viajes$ = this.viajes.asObservable();

  agregarViaje(viaje: Omit<Viaje, 'id'>) {
    const viajesActuales = this.viajes.value;
    const nuevoViaje = {
      ...viaje,
      id: Date.now()
    };
    this.viajes.next([...viajesActuales, nuevoViaje]);
  }
} 