import { AppdatamhsPage } from './appdatamhs/appdatamhs';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AplikasisederhanaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aplikasisederhana',
  templateUrl: 'aplikasisederhana.html',
})
export class AplikasisederhanaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AplikasisederhanaPage');
  }

  GotoAppdatamhs(){
    this.navCtrl.push(AppdatamhsPage);
  }

}
