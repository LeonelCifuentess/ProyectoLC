import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-metal',
  imports: [CommonModule],
  templateUrl: './metal.html',
  styleUrl: './metal.css'
})
export class Metal {

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
        id: "16T",
        img: "../../../assets/puerta20metal.jfif",
        alt: "puerta",
        titulo: "puertas",
        descripcion: "puertas para casa",
        anualpublicacion: 2025
      },
      {
        id: "17T",
        img: "../../../assets/puerta21metal.avif",
        alt: "puerta",
        titulo: "puertas",
        descripcion: "puertas para casa",
        anualpublicacion: 2025
      },
      {
        id: "18T",
        img: "../../../assets/puerta22metal.jfif",
        alt: "puerta",
        titulo: "puertas",
        descripcion: "puertas para casa",
        anualpublicacion: 2025
      },
      {
        id: "19T",
        img: "../../../assets/puerta23metal.webp",
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

