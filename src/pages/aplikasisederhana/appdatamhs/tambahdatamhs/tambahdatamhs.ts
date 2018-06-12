import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MAHASISWA } from '../../../../app/app.config';

/**
 * Generated class for the TambahdatamhsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambahdatamhs',
  templateUrl: 'tambahdatamhs.html',
})
export class TambahdatamhsPage {
  mahasiswas : any [] = MAHASISWA;
  mahasiswa : any = {
    nim: null, nama: null, jurusan: null, kelas: null, jadwal: null
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahdatamhsPage');
  }

  DoAddmhs(){
    this.mahasiswas.push(this.mahasiswa);
    this.mahasiswa = "";
  }

}
