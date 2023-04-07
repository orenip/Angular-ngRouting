import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';

  token: string | null = null;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.token= sessionStorage.getItem('token')
  }
    logout(){
      sessionStorage.removeItem('token');
      this.router.navigate(['login']);

    }

}


//Paso de informacion entre componentes:
// 1. A través de @Input y @Outputs
// 2. A través de inyectores de constructores de componentes hijos @ViewChild @ContentChild o @ContentChildren
// 3. A través de Servicios (Promesas y Observables, etc) ---> NGRX (gestión del estado de la aplicación)
// 4. A través de parámetros entre rutas

