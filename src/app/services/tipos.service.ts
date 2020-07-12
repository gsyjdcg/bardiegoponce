import { Injectable } from '@angular/core';

export interface Tipo {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  tipos: Array<Tipo> = [
    { id: 'tapas', name: 'Tapas' },
    { id: 'bocatines', name: 'Bocatines' },
    { id: 'raciones', name: 'Raciones' },
    { id: 'desayunos', name: 'Desayunos' }
  ];

  constructor() {
  }

  getNameById(id: string): string {
    const tipo = this.tipos.find(t => t.id === id);

    if (tipo) {
      return tipo.name;
    } else {
      return '';
    }
  }
}
