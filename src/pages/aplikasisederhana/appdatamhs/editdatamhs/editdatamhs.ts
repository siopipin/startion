import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditdatamhsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdatamhs',
  templateUrl: 'editdatamhs.html',
})
export class EditdatamhsPage {
  datamhs: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datamhs = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditdatamhsPage');
  }

  DoUpdatemhs(newitem){
  }

}
