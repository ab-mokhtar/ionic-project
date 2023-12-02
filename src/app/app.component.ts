import { Component } from '@angular/core';
import { FireBaseService } from './fire-base.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user:string="login";
  constructor(private authervice:FireBaseService) {

  }
  ngOnInit() {
 
  }
}
