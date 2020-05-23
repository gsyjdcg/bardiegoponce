import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tapa {
  id: number;
  nombre: string;
  precio: number
}

@Injectable({
  providedIn: 'root'
})
export class TapasService {
  tapas: Array<Tapa>;

  constructor(protected http: HttpClient) {
  }

  load(): void {
    this.http.get('assets/data/tapas.json').subscribe(
      (tapas: Array<Tapa>) => {
        this.tapas = tapas;
      },
      (error) => {
        console.log(error);
      });
  }
}
