import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DaftarmantanPage } from '../daftarmantan/daftarmantan';
/**
 * Generated class for the PassingdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passingdata',
  templateUrl: 'passingdata.html',
})
export class PassingdataPage {

  namamantan : string = "";
  alasan : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassingdataPage');
  }

  GotoDaftarmantanpage(){
    this.navCtrl.push(DaftarmantanPage, {nama : this.namamantan, alasan : this.alasan});
  }

}
