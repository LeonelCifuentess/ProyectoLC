import { Component } from '@angular/core';
import { Sesion } from '../../models/sesion';
import { FormControl,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
/* FormControl:controlador de cada dato ingresadoen el formulario
FormGroup: directiva paraformularios reactivos en angular, agrupa FormControl
ReactiveFormsModule:permite hacer uso de formulario reactivos
Validators:valida datos ingresados en un formulario  */
@Component({
  selector: 'app-registo',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  /* propiedades Pirvada ->informacion sensible */
//Oprivate =this.contrasena;
//coleccion de productos de tipo PRODUCTO
coleccionsesion: Sesion[]=[];
//instancia que se vinvula con el formulario desde el html
/* nombrepropiedad: new control->
string->''/number ->null
validators.required-> validado como valor requerido estrictamente */
nuevosesion = new FormGroup({
  nombre: new FormControl('',Validators.required),
 apellido: new FormControl('',Validators.required),
  mail: new FormControl('',Validators.required),
   contrasena: new FormControl('',Validators.required),

})
/**
* @description metodo de creacioon de productos segun interfaz "sesion"
 */
crearSesion():void {
  if(this.nuevosesion.valid){
    const nuevoSesion: Sesion={
      
      /* resto de propiedades , asignamos desde el formulario el valor que recibio desde su casilla o
      formControlName */
     nombre: this.nuevosesion.value.nombre!,
     apellido: this.nuevosesion.value.apellido!,
     mail: this.nuevosesion.value.mail!,
     contrasena: this.nuevosesion.value.contrasena!,
    }
    this.coleccionsesion.push(nuevoSesion)

    alert("¡se creo nuevo usuario exito!\n"+nuevoSesion.mail)
    console.log("sesion agregada :",nuevoSesion);
    console.log("sesiones actuales ",this.coleccionsesion);

    /* reseteamos el formulario */
    this.nuevosesion.reset()
    
  }
  
}

}

