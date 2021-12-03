import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontAngular';
  ocultar = false;
  resultadoDataBingingEvent =""
  cosasQueGustan =["pollo", "hamburguesa", "perro", "salchichas"]

  changeH4(){
    this.resultadoDataBingingEvent = "me cambiaron por evento"
  }
}
