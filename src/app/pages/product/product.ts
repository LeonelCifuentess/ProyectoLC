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
        id:"1T",
        img:"../../../assets/puerta5product.jpg",
        alt:"puertaaa",
        titulo:"puertas",
        descripcion:"puertas para casa",
        anualpublicacion:2025
      },
        {
        id:"2T",
        img:"../../../assets/puerta6product.jpg",
        alt:"puertaaa",
        titulo:"puertas",
        descripcion:"puertas para casa",
        anualpublicacion:2025
      },
        {
        id:"3T",
        img:"../../../assets/puerta7product.jpg",
        alt:"puertaaa",
        titulo:"puertas",
        descripcion:"puertas para casa",
        anualpublicacion:2025
      },
        {
        id:"4sT",
        img:"../../../assets/puerta5product.jpg",
        alt:"puertaaa",
        titulo:"puertas",
        descripcion:"puertas para casa",
        anualpublicacion:2025
      }

    ]
  }
}
