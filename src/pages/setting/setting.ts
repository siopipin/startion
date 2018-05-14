import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from './../about/about';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  Tsetting : string;
  TPesan : String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Tsetting = "Ini adalah tampilan dengan button model Outline";
    this.TPesan = "Tampilan ionic dengan menggunakan component tombol berbasis UI Mobile";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  GoAboutpage(){
    this.navCtrl.push(AboutPage);
  }

}
