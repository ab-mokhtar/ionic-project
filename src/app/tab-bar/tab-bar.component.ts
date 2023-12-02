import { Component, OnInit } from '@angular/core';
import { FireBaseService } from '../fire-base.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent  implements OnInit {

  constructor(private auth:FireBaseService) { }

  ngOnInit() {}

}
