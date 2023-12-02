import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,NgControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { FireBaseService } from '../fire-base.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  

  constructor(private toastController: ToastController,private loadingController: LoadingController,private authService:FireBaseService,private router: Router, public formBuilder: FormBuilder) { 

  }

  ngOnInit() {
  
  }
  
 
  async signUP(ionicForm:any){
    console.log(ionicForm.value)
    const loading = await this.loadingController.create();
    await loading.present();
   

      const user = await this.authService.registerUser(ionicForm.value.email, ionicForm.value.password,ionicForm.value.fullname).catch((err:any) => {
        this.presentToast(err)
        console.log(err);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(['/login'])
      }
    
  }

  async presentToast(message: undefined) {
    console.log(message);
    
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

}
