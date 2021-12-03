import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AqiService {

  constructor(private http: HttpClient) { }

  consultarAQI():string{
    return(Math.random()*(200-50)+50).toString();
  }
  consultarAQIDesdeElServidorBack(){
    const urlAPIBack = "http://localhost:3000/aqi";
    return this.http.get(urlAPIBack)
  }

}
