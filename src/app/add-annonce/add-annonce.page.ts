import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { FireBaseService } from '../fire-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {

  constructor(private annonceService:AnnoncesService,private authService:FireBaseService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:any){
    form.user=this.authService.getUser().email;
    this.annonceService.addAnnonces(form).subscribe(
      {
next:(result)=>{console.log(result)
  this.router.navigate(['/compte'])},
      error:(err)=>console.log(err)}
    )
console.log(form)    

  }
}
