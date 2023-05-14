import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proycalcu';

   // cantidadone: number;
   cantidadone = 0;
   cantidadtwo = 0;
   resultado = 0;
 
   suma(){
    let res =  this.resultado = (this.cantidadone + this.cantidadtwo);
      console.log(res);
    }

    resta(){
      let res =  this.resultado = (this.cantidadone - this.cantidadtwo);
        console.log(res);
      }

    multiplicacion(){
      let res =  this.resultado = (this.cantidadone * this.cantidadtwo);
        console.log(res);
      }

      divicion(){
        let res =  this.resultado = (this.cantidadone / this.cantidadtwo);
          console.log(res);
        }

   
}
