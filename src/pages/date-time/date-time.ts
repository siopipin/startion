import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DateTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html',
})
export class DateTimePage {
  public event = {
    bulan : '1997-06-12',
    start : '19:00',
    end: '2018-09-09'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateTimePage');
  }

}
