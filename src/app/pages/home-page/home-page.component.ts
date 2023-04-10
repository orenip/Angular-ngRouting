import { IContacto } from './../../models/contact.interface';
import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
import { IRandomContact } from 'src/app/models/randomuser';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  token: string | null=null;
  contactoSeleccionado: IRandomContact | undefined;

  constructor(private router: Router){

  }

  ngOnInit(): void {
    //Comprobar si existe el token en el sessionStorage
    this.token= sessionStorage.getItem('token');

    //Leemos del estado del historial de navegación
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado =history.state.data;
    }
  }

  navegarAContacts():void{


    let navigationExtras: NavigationExtras = {

      queryParams: {


        //order: ''
        //filter: 'mujer',
        gender: 'todos',
      }
    }

    this.router.navigate(['contacts'], navigationExtras);
  }

}
