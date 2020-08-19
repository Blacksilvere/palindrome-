import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputValue: string = "";
  constructor(public alertCtrl: AlertController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen){
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  click(){ 
    var text = this.inputValue
    var rev = this.revers(text)
    var palindrome = "no palindrome"
    var index = text.localeCompare(rev, 'en', { sensitivity: 'base' });  
    if (index == 0){
      palindrome = "palindrome"
    }
    let alert = this.alertCtrl.create({
      title: 'test',
      subTitle: palindrome,
      buttons: ['ok']
    });
    alert.present();
  }

  revers(text:string){
    return text.split('').reverse().join('');
  }

}
