import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  //email: string='';
  //password: string='';

  constructor(private router: Router, private authService: AuthService){

  }

  ngOnInit(): void {

    let token= sessionStorage.getItem('token')

    if (token){
      this.router.navigate(['home']);
    }
  }

  //loginUser(email: string, password: string){
    loginUser(value: any){

      let {email, password}=value;

    this.authService.login(email, password).subscribe(
      (response)=> {
        if(response.token){
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['home']);
        }

      },
      (error) => console.error(`Ha habido un error al hacer login: ${error}`),
      () => console.info('Proceso de login terminado')
    )


  }

}
