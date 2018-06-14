import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LamanLoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laman-loading',
  templateUrl: 'laman-loading.html',
})
export class LamanLoadingPage {
  pilihan = 'materi';
  isLoading = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LamanLoadingPage');
  }



}
