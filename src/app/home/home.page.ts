import { Component } from '@angular/core';
import { FireBaseService } from '../fire-base.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authservice:FireBaseService) {}
  ngOnInit() {
 
  }
}
