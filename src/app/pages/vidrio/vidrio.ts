import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-vidrio',
  imports: [CommonModule],
  templateUrl: './vidrio.html',
  styleUrl: './vidrio.css'
})
export class Vidrio {
   public infoTarjeta: Tarjeta[];
  
    /*declaramos coleccion de tarjetas en base a modelo de interfaz "tarjeta
    -se tiene que respetar el uso de todas las propiedades y su tipo
    -tipo alfanumérico (string) inicializa en ""
    -tipo numérico(number) inicializa en 0
    Q 1|°   ° */
    constructor() {
      this.infoTarjeta = [
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
  


