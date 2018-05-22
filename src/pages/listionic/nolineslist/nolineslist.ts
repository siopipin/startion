import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NolineslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nolineslist',
  templateUrl: 'nolineslist.html',
})
export class NolineslistPage {

  makanans= [
    'Pecan (199 kalori)',
    'Kacang pinus (188 kalori)',
    'Kacang Brazil (184 kalori)',
    'Walnut (183 kalori)',
    'Hazelnut (181 kalori)',
    'Kacang tanah (164 kalori)',
    'Biji bunga matahari (164 kalori)',
    'Almond (162 kalori)',
    'Mede (161 kalori)',
    'Pistachio (159 kalori)',
    'Biji semangka (156 kalori)',
    'Biji rami (150 kalori)',
    'Biji chia (136 kalori)'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NolineslistPage');
  }

}
