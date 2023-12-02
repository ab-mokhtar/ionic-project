import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {
  announces=[{id:2,subject:"announce 2",user:"user 2",categorie:1},{id:2,subject:"announce 2",user:"user 2",categorie:1},]
  displayed:any=[]
  constructor(private annonceService:AnnoncesService) { }
  ionViewWillEnter() {
    this.displayed=[]
    console.log("update data");
    this.loadData()
  }
  async ngOnInit() {
    
    
  }
  loadData(){
    this.announces=[]
    this.annonceService.getAllAnnonces().subscribe({
      next: (response) => {
        
        console.log(response);
        for (const key in response) {
         
          this.announces.push({ id: key, ...response[key] });
        }
        console.log(this.announces);
        this.filter(true)
       

      },
      error: (err) => {
        console.log(err);
      },
    })
  }
  filter(filter:boolean){
    this.displayed=[]
    if(filter){
      this.displayed=this.announces.filter( x => x.categorie == 1)
    }
    else
    {
      this.displayed=this.announces.filter( x => x.categorie == 2)
    }
  }
  // ngAfterViewInit() {
  //   this.displayed=[]
  //   console.log("wselett");
  //   this.loadData()
  // }
  onIonInfinite(ev:any) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
