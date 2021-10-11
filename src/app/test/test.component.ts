import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public test: TestService) { }

  ngOnInit(): void {
    this.test.test().subscribe( response => {
      console.log(response);
      
    })
  }

}
