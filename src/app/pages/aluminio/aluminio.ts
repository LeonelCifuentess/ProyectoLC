import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluminio',
  imports: [CommonModule],
  templateUrl: './aluminio.html',
  styleUrl: './aluminio.css'
})
export class Aluminio {
 /**
   * propiedad PUBLICA: libere acceso a su contenido / 
   * PRIVADA: contenido restringido
   */
  public infoTarjeta: Tarjeta[];

  /*declaramos coleccion de tarjetas en base a modelo de interfaz "tarjeta
  -se tiene que respetar el uso de todas las propiedades y su tipo
  -tipo alfanumérico (string) inicializa en ""
  -tipo numérico(number) inicializa en 0
  Q 1|°   ° */
  constructor() {
    this.infoTarjeta = [
      {
        id: "12T",
        img: "../../../assets/puerta12aluminio.jpg",
        alt: "puerta",
        titulo: "puertas",
        descripcion: "puertas para casa",
        anualpublicacion: 2025
      },
      {
        id: "13T",
        img: "../../../assets/puerta13aluminio.jpg",
        alt: "puerta",
        titulo: "puertas",
        descripcion: "puertas para casa",
        anualpublicacion: 2025
      },
      {
        id: "14T",
        img: "../../../assets/puerta14aluminio.webp",
        alt: "puerta",
        titulo: "puertas",
        descripcion: "puertas para casa",
        anualpublicacion: 2025
      },
      {
        id: "15T",
        img: "../../../assets/puerta15aluminio.jpg",
        alt: "puertaaa",
        titulo: "puertas",
        descripcion: "puertas para casa",
        anualpublicacion: 2025
      }

    ]
  }

  /*variable para tomar una tarjeta seleccionada */
  tarjetaSeleccionada: any = null;

  /*recibir elemento seleccionado por parametro y lo asignaa "tarjetaSeleccionada" */
  verMas(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }
}


