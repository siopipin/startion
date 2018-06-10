import { MenumakananPage } from './../menumakanan/menumakanan';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DaftarmahasiswaPage } from '../daftarmahasiswa/daftarmahasiswa';

/**
 * Generated class for the ArrayObjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-array-object',
  templateUrl: 'array-object.html',
})
export class ArrayObjectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrayObjectPage');
  }

  GotoMenumakananpage(){
    this.navCtrl.push(MenumakananPage);
  }

  GotoDaftarmhs(){
    this.navCtrl.push(DaftarmahasiswaPage);
  }

}
