import { Component } from '@angular/core';
import { TestService } from './test/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kevin';
  constructor(public test: TestService) { }
  ngOnInit(): void {
    console.log("newa");
    
    this.test.test().subscribe( response => {
      console.log(response);
      
    })
  }
}
