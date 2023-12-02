import { Component, OnInit } from '@angular/core';
import { FireBaseService } from '../fire-base.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(public auth:FireBaseService,private router:Router) { }

  ngOnInit() {
  }
async logout(){
  await this.auth.signOut();
  this.router.navigateByUrl('/login');}
}
