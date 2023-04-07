import { Component } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent {

  randomContact: IRandomContact| undefined;

  constructor(private randomUserService: RandomUserService){}

  ngOnInit(): void {
    this.randomUserService.obtenerRandomContact().subscribe((response: Results)=>{

      this.randomContact= response.results[0];
      console.table(this.randomContact.name);
    })

  }

}
