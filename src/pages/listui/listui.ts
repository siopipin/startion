import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { HomePage } from './../home/home';
import { ListPage } from './../list/list';
import { SettingPage } from '../setting/setting';
import { ListavatarPage } from './../listavatar/listavatar';


@IonicPage()
@Component({
  selector: 'page-listui',
  templateUrl: 'listui.html',
})
export class ListuiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListuiPage');
  }

  GotoAboutPage(){
    this.navCtrl.push(AboutPage);
  }

  GotoHomePage(){
    this.navCtrl.push(HomePage);
  }

  GotoListPage(){
    this.navCtrl.push(ListPage);
  }

  GotoSettingpage(){
    this.navCtrl.push(SettingPage);
  }

  GotoListavatar(){
    this.navCtrl.push(ListavatarPage);
  }

}
