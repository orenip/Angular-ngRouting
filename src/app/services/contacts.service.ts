import { LISTA_CONTACTOS } from './../mock/contacts.mock';
import { IContacto } from './../models/contact.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  listaContactos: IContacto[] = LISTA_CONTACTOS;

  constructor() {}

  obtenerContactos(sexo?:string): Promise<IContacto[]>{

    if(sexo == 'hombre' || sexo=='mujer'){

      let listaFiltrada: IContacto[] = this.listaContactos.filter((contacto)=> contacto.sexo== sexo);
      return Promise.resolve(listaFiltrada);

    }else if(sexo=='todos'){
      return Promise.resolve(this.listaContactos);
    } else{
      return Promise.reject('Filtro no válido')
    }

  }

}
