import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { FireBaseService } from '../fire-base.service';
import { AlertController, InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  announces=[{id:1,subject:"announce 1",user:"user 1",categorie:1},
  {id:2,subject:"announce 2",user:"user 2",categorie:1},
  {id:3,subject:"announce 3",user:"user 3",categorie:2},
  {id:4,subject:"announce 4",user:"user 4",categorie:2},]
  displayed:any=[]
  taskSer: any;
  constructor(private annonceService:AnnoncesService,private authService:FireBaseService,private alertController:AlertController) { }
  ionViewWillEnter() {
    this.displayed=[]
    console.log("update data");
    this.loadData()
  }
   ngOnInit() {
    this.displayed=[]
    //this.loadData()
  }
  loadData(){
    this.announces=[]
    this.annonceService.getAllAnnonces().subscribe({
      next:  (response) => {
        
        console.log(response);
        for (const key in response) {
          console.log(response[key].user ==  this.authService.getUser().email)

          if(response[key].user ==  this.authService.getUser().email)
{
          this.announces.push({ id: key, ...response[key] });
        }}
        console.log(this.announces);
        this.filter(true)
       console.log("compte :"+ this.displayed)

      },
      error: (err) => {
        console.log(err);
      },
    })
    console.log(this.displayed)
  }
  filter(filter:any){
    if(filter){
      this.displayed=this.announces.filter( x => x.categorie == 1)
    }
    else
    {
      this.displayed=this.announces.filter( x => x.categorie == 2)
    }
  }

  async presentAlert(idDocument:string) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Etes vous sur de vouloir supprimer ce task ?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: () => {
            this.annonceService.deleteAnnonces(idDocument).subscribe({
              next: (response) => {
                this.loadData();
              },
              error: (err) => {
                console.log(err);
              },
            });
          },
        },
      ],
    });

    await alert.present();
  }
  getTasks() {
    throw new Error('Method not implemented.');
  }
  onIonInfinite(ev:any) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
