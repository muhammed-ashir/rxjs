import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private appService:AppService){}

   // put $ sign at the end of observable variable (names$)

  ngOnInit(){

   // first example
    this.appService.getNames(1).subscribe({
      next: names => console.log(names),
      error: err => console.log(err.message)
    }
    )




  }



}
