import { Component } from '@angular/core'

import { NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
@Component ({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    let self = this;
    setTimeout(function () {
      self.navCtrl.push(MyApp.rootPage);
      self.navCtrl.remove(0,1);
    },2000);
  }
}
