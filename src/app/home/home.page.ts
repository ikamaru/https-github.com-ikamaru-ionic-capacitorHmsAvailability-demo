import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
//import "capacitor-hms-availability";
const { HmsAvailability } = Plugins;//import the HmsAvailability plugin

import { ToastController } from '@ionic/angular'; //used Just in this demo to dislay result

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(private toastController:ToastController) {}

  isHmsAvailable(){
    //check if HMS is available or not
    HmsAvailability.isHmsAvailable().then(res=>{
      if(res.isAvailable){
        this.showToast("HMS is available");
      }else{
        this.showToast("HMS is not available");
      }
    })
  }
  isGmsAvailable(){
    //check if GMS is available or not
    HmsAvailability.isGmsAvailable().then(res=>{
      if(res.isAvailable){
        this.showToast("GMS is available");
      }else{
        this.showToast("GMS is not available");
      }
    })
  }
  private async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
