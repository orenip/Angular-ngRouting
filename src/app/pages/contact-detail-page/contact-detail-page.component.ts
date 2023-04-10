import { IContacto } from './../../models/contact.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRandomContact } from 'src/app/models/randomuser';


@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  id: any | undefined;
  contacto: IRandomContact | undefined;
  filtroPrevio: string='todos';

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {

    //Vamos a leer los parámetros
    //this.route.snapshot
    this.route.params.subscribe(
      (params:any)=>{
        if(params.id){
          this.id= params.id;
        }
      });

    //this.route.parent?.params

    //Vamos a leer también del State el contacto
    if(history.state.data){
      this.contacto = history.state.data;
    }

    if(history.state.filtro){
      this.filtroPrevio = history.state.filtro;
    }
  }

}
