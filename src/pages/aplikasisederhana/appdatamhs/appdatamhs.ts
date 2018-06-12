import { TambahdatamhsPage } from './tambahdatamhs/tambahdatamhs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditdatamhsPage } from './editdatamhs/editdatamhs';
import { MAHASISWA } from '../../../app/app.config';

/**
 * Generated class for the AppdatamhsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appdatamhs',
  templateUrl: 'appdatamhs.html',
})
export class AppdatamhsPage {
  daftarmahasiswa : any = MAHASISWA;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppdatamhsPage');
  }

  DoAddmhs(){
    this.navCtrl.push(TambahdatamhsPage);
  }

  DoEditmhs(daftarmahasiswa){
    this.navCtrl.push(EditdatamhsPage, daftarmahasiswa);
  }

  DoDeletemhs(index){
    this.daftarmahasiswa.splice(index);
  }

}
