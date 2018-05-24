import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../../home/home';


@IonicPage()
@Component({
  selector: 'page-thumbnaillist',
  templateUrl: 'thumbnaillist.html',
})
export class ThumbnaillistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThumbnaillistPage');
  }

  Gotohomepage(){
    this.navCtrl.push(HomePage);
  }

}
