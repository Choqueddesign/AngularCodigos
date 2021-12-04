import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nadvar',
  templateUrl: './nadvar.component.html',
  styleUrls: ['./nadvar.component.css']
})
export class NadvarComponent implements OnInit {

  nadvarColor: string = "na";

  constructor() { 
    this.nadvarColor = "nadvar-ligth bg-light"
  }

  ngOnInit(): void {
  }

  navbarColorClaro(route: boolean):void{
    route? this.nadvarColor = "nadvar-ligth bg-light":this.nadvarColor="nadvar-dark bg-light"
  }

}
