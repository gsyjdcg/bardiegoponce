import { Injectable } from '@angular/core';

export interface Allergen {
  id: string;
  name: string;
  description?: string;
  color?: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AllergensService {
  allergens: Array<Allergen> = [
    {
      "id": "1",
      "name": "Cereales con gluten",
      "description": "Cereales con gluten",
      "color": "gluten",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "2",
      "name": "Crustáceos",
      "description": "Crustáceos, mariscos",
      "color": "crustaceos",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "3",
      "name": "Huevos",
      "description": "Huevos",
      "color": "huevos",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "4",
      "name": "Pescado",
      "description": "Pescado",
      "color": "pescado",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "5",
      "name": "Cacahuetes",
      "description": "Cacahuetes",
      "color": "cacahuetes",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "6",
      "name": "Soja",
      "description": "Soja",
      "color": "soja",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "7",
      "name": "Lacteos",
      "description": "Lacteos",
      "color": "lacteos",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "8",
      "name": "Frutos secos",
      "description": "Frutos secos",
      "color": "frutos-secos",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "9",
      "name": "Apio",
      "description": "Apio",
      "color": "apio",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "10",
      "name": "Mostaza",
      "description": "Mostaza",
      "color": "mostaza",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "11",
      "name": "Sésamo",
      "description": "Granos de sésamo",
      "color": "sesamo",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "12",
      "name": "Sulfitos",
      "description": "Dióxido de azufre y sulfitos",
      "color": "sulfitos",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "13",
      "name": "Moluscos",
      "description": "Moluscos",
      "color": "moluscos",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "14",
      "name": "Altramuces",
      "description": "Altramuces",
      "color": "altramuces",
      "icon": "assets/img/pescado.svg"
    },
    {
      "id": "15",
      "name": "Ajo",
      "description": "Ajo",
      "color": "ajo",
      "icon": "assets/img/pescado.svg"
    }
  ];

  constructor() {
  }

  getNameById(id: string): string {
    const allergen = this.allergens.find(t => t.id === id);

    if (allergen) {
      return allergen.name;
    } else {
      return '';
    }
  }

  getColorById(id: string): string {
    const allergen = this.allergens.find(t => t.id === id);

    if (allergen) {
      return allergen.color;
    } else {
      return '';
    }
  }
}
