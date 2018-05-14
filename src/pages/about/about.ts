import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { HomePage } from './../home/home';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  title : string =  "Latihan menggunakan variable Global";
  text : string;
  komentar : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = "Ini adalah text dari variabel Global";
    this.komentar = "Ini adalah komentar dari variabel Global";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  GoSetting(){
    this.navCtrl.push(SettingPage);
  }

  GoHomepage(){
    this.navCtrl.push(HomePage);
  }

}
