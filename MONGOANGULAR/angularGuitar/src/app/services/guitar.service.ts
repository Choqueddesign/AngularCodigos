import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  constructor(private httpClient: HttpClient) { }

  getAllGuitars(){
    return this.httpClient.get("http://localhost:8080/guitarras/")
  }

  postCreateGuitar(guitar: any){
    return this.httpClient.post("http://localhost:8080/guitarras/",guitar)
  }

  getGuitarsByBranch(branch:string){

  }

  deleteGuitar(branch:string,model:string){

  }

}

