import { MoviepagePage } from './../moviepage/moviepage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ArrayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-array',
  templateUrl: 'array.html',
})
export class ArrayPage {
  daftar = "makanan";
  makanan : string[] = ["bubur","kacang","hijau","mie","goreng",]
  minuman : any[] = ["Jus timun","Teh manis","Sostro","Kopi","Susu panas","Air putih 1 botol",]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrayPage');
  }

  Kemoviepage(){
    this.navCtrl.push(MoviepagePage);
  }

}
