import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DaftarmantanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daftarmantan',
  templateUrl: 'daftarmantan.html',
})
export class DaftarmantanPage {
  namas: string;
  alasans: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.namas = this.navParams.data.nama;
    this.alasans = this.navParams.data.alasan;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarmantanPage');
  }

  
}
