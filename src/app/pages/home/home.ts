import { Component } from '@angular/core';
import { Puerta } from '../../puerta';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
public infoPuerta:Puerta[];

constructor(){
  this.infoPuerta=[
    {
      id:"P1",
      img:"",
      titulo:"",
      color:"",
      material:"",
      anualCreacion:1,

  },
    {
  id:"P2",
      img:"",
      titulo:"",
      color:"",
      material:"",
      anualCreacion:2,
},
    {
  id:"P3",
      img:"",
      titulo:"",
      color:"",
      material:"",
      anualCreacion:2,
     } ,
    {  
  id:"P4",
      img:"",
      titulo:"",
      color:"",
      material:"",
      anualCreacion:2,
    },


  ]
}
}
