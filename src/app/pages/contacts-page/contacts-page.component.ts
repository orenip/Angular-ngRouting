import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { IContacto } from './../../models/contact.interface';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { RandomUserService } from 'src/app/services/random-user.service';
import { IRandomContact, Results } from 'src/app/models/randomuser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{

  filtroSexo: string= 'todos';
  //listaContactos: IContacto[]=[];
  listaRandomContacts: IRandomContact[]=[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              //private contactService: ContactsService,
              private randomUserService: RandomUserService){

  }

  ngOnInit(): void {



    //Obtener los Query Params
    this.route.queryParams.subscribe((params: any) =>{
      console.log('QueryParams:',params.sexo)
      if(params.sexo){
          this.filtroSexo= params.sexo

         if(params.sexo=== 'female'|| params.sexo==='male'){

        //Implementación para obtener la lista de contactos aleatoria
          this.randomUserService.obtenerRandomContacts(10, params.sexo).subscribe(
            {
              next: (response: Results)=>{
                console.log(response),
                response.results.forEach((randomContact: IRandomContact, index: number) =>{
                  this.listaRandomContacts.push(randomContact);
                })
                console.log(this.listaRandomContacts);
              },
              error: (error)=>console.error(`${error}`),
              complete: () =>console.info('Petición de random contacts terminada')
            }
          );

         }
      }else{
        //Implementación para obtener la lista de contactos aleatoria
        this.randomUserService.obtenerRandomContacts(10).subscribe(
          {
            next: (response: Results)=>{
              console.log(response),
              response.results.forEach((randomContact: IRandomContact, index: number) =>{
                this.listaRandomContacts.push(randomContact);
              })
              console.log(this.listaRandomContacts);
            },
            error: (error)=>console.error(`${error}`),
            complete: () =>console.info('Petición de random contacts terminada')
          }
        );
      }
      //Obtener lista de contactos
           /*this.contactService.obtenerContactos(this.filtroSexo).then(
           (lista)=> this.listaContactos = lista)
           .catch((error)=> console.error(`Ha habido un error al obtener los contactos: ${error}`))
            .finally(()=> console.info('Petición de contactos terminada'))
          */



    });



  }
  //Ejemplo de paso de información entre componentes del ESTADO
  volverHome(contacto: IRandomContact){

    let navigationExtras: NavigationExtras={
      state: {
        data: contacto
      }

    }
    this.router.navigate(['/home'], navigationExtras)
  }

}
