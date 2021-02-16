import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Tapa {
  id: string;
  numero: number;
  name: string;
  image?: string;
  price: { one?: number; half?: number; tapa?: number; precio?: number; entero?: number; medio?: number };
  tipo: string;
  allergens?: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class TapasService {
  tapas: Array<Tapa>;

  constructor(protected http: HttpClient) {
  }

  load(tipo: string): void {
    this.http.get('assets/data/tapas.json').subscribe(
      (tapas: Array<Tapa>) => {
        if (tapas?.length) {
          if (tipo === 'bocatines') {
            this.tapas = tapas.filter(t => t.tipo === tipo);
          } else {
            this.tapas = tapas.filter(t => t.tipo === tipo).sort((a: Tapa, b: Tapa) => a.name.localeCompare(b.name));
          }
        }
      },
      (error: any) => {
        console.log(error);
      });
  }
}
