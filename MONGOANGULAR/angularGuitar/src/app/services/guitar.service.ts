import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  constructor(private httpClient: HttpClient) { }

  getAllGuitars(){
    return this.httpClient.get("hhtp://localhost:8080/guitarras/")
  }//recordar el return

  getGuitarsByBranch(branch:string){

  }

  deleteGuitar(branch:string){

  }

}

