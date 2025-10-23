import { Component } from '@angular/core';
import { Puerta } from '../../puerta';
import { identifierName } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public infoPuerta: Puerta[];

  constructor() {
    this.infoPuerta = [
      {
        id: "P1",
        img: "../../../assets/product8home",
        titulo: "puerta para casa",
        color: "Negra y Dorado",
        material: "Aluminio",
        anualCreacion: 2010,

      },
      {
        id: "P2",
        img: "../../../assets/product9home",
        titulo: "puerta para bodega",
        color: "Marrón",
        material: "Madera",
        anualCreacion: 1900,
      },
      {
        id: "P3",
        img: "../../../assets/product10home",
        titulo: "puerta para casa",
        color: "Blanca",
        material: "Madera",
        anualCreacion: 2000,
      },
      {
        id: "P4",
        img: "../../../assets/puertas11home",
        titulo: "puerta para iglesia",
        color: "Marrón",
        material: "Madera",
        anualCreacion: 1990,
      },


    ]
  }
  tarjetaSeleccionada: any = null;

  /*recibir elemento seleccionado por parametro y lo asignaa "tarjetaSeleccionada" */
  verMas(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }
}
