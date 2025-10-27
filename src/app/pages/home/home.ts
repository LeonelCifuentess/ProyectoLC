import { Component } from '@angular/core';
import { Puerta } from '../../models/puerta';
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
        img: "../../../assets/puerta8home.jpg",
        titulo: "puerta para casa",
        color: "Negra y Dorado",
        material: "Aluminio",
        anualCreacion: 2010,

      },
      {
        id: "P2",
        img: "../../../assets/puerta9home.jpg",
        titulo: "puerta para bodega",
        color: "Marrón",
        material: "Madera",
        anualCreacion: 1900,
      },
      {
        id: "P3",
        img: "../../../assets/puerta10home.jpg",
        titulo: "puerta para casa",
        color: "Blanca",
        material: "Madera",
        anualCreacion: 2000,
      },
      {
        id: "P4",
        img: "../../../assets/puerta11home.jpg",
        titulo: "puerta para iglesia",
        color: "Marrón",
        material: "Madera",
        anualCreacion: 1990,
      },


    ]
  }
  puertaseleccionada: any = null;

  /*recibir elemento seleccionado por parametro y lo asignaa "tarjetaSeleccionada" */
  verMas(puerta: any) {
    this.puertaseleccionada = puerta;
  }
}
