import { Component, Input } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent {

  randomResults: Results | undefined;
  @Input() randomContact: IRandomContact| undefined;

  constructor(private randomUserService: RandomUserService){}

  ngOnInit(): void {
    this.randomUserService.obtenerRandomContact().subscribe((response: Results)=>{

      this.randomContact= response.results[0];
      console.table(this.randomContact.name);
    })

  }

}
