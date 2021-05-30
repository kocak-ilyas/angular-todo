import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  "callCenterNumber": string

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.callCenterNumber = this.testService.callCenterNumber

  }

}
