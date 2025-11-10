import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  /**
   * propiedad PUBLICA: libere acceso a su contenido / 
   * PRIVADA: contenido restringido
   */
  public infoTarjeta: Tarjeta[];

  /*declaramos coleccion de tarjetas en base a modelo de interfaz "tarjeta
  -se tiene que respetar el usode todas las propiedades y su tipo
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
      },
       {
          id: "20T",
          img: "../../../assets/puerta16vidrio.webp",
          alt: "puerta",
          titulo: "puertas",
          descripcion: "puertas para casa",
          anualpublicacion: 2025
        },
        {
          id: "21T",
          img: "../../../assets/puerta17vidrio.avif",
          alt: "puerta",
          titulo: "puertas",
          descripcion: "puertas para casa",
          anualpublicacion: 2025
        },
        {
          id: "22T",
          img: "../../../assets/puerta18vidrio.jpg",
          alt: "puerta",
          titulo: "puertas",
          descripcion: "puertas para casa",
          anualpublicacion: 2025
        },
        {
          id: "23T",
          img: "../../../assets/puerta19vidrio.jpg",
          alt: "puertaaa",
          titulo: "puertas",
          descripcion: "puertas para casa",
          anualpublicacion: 2025
        },
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
