import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FireBaseService } from '../fire-base.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  

  // email:any
  // password:any
  // contact:any

  constructor(private toastController: ToastController, private alertController: AlertController, private loadingController: LoadingController, private authService: FireBaseService, private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
   
   
  }

  async login(ionicForm:any) {
    console.log(ionicForm.value)
    const loading = await this.loadingController.create();
    await loading.present();
    // console.log(this.email + this.password);
    

      //  await  loading.dismiss();
      const user = await this.authService.loginUser(ionicForm.value.email, ionicForm.value.password).catch((err) => {
        this.presentToast(err)
        console.log(err);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(['/announces'])
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
