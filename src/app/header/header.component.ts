import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  "callCenterNumber": string

  constructor(private testService: TestService) {

  } // servislere erişmek için ekle

  ngOnInit(): void {
    this.callCenterNumber = this.testService.callCenterNumber
  }

}
