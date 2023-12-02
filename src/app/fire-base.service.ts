import { Injectable, inject } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  private isAuthenticated = false;
  private user :any;
   constructor(private auth:Auth,) {

  }

  async registerUser(email:string,password:string,name:string){
    return await createUserWithEmailAndPassword(this.auth,email, password)

  }

  async loginUser(email:string,password:string){
   let log= await signInWithEmailAndPassword(this.auth,email, password);
   if(log){
    this.user= await this.getProfile()
    this.isAuthenticated=true

   }
   return log;

  }

  async resetPassword(email:string){
     return await sendPasswordResetEmail(this.auth,email);
 
  }
   getProfile(){
   return  this.auth.currentUser
  }
checkIsAuthenticated(){
  return this.isAuthenticated;
}
getUser(){
  return this.user;
}
  async signOut(){
    this.isAuthenticated=false
    this.user=null
   return await signOut(this.auth);
  }




  
}
