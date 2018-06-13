import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the InputnilaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inputnilai',
  templateUrl: 'inputnilai.html',
})
export class InputnilaiPage {

  // mahasiswa: any = [
  //   {nama: "", nim: "", nilai: ""}
  // ];
  mhs = {nama: null, nim: null, nilai: null};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl:  ViewController
  ) {
    this.mhs.nama = this.navParams.data.nama;
    this.mhs.nim = this.navParams.data.nim;
    this.mhs.nilai = this.navParams.data.nilai;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputnilaiPage');
  }

  Dotutup(){
    this.viewCtrl.dismiss();
  }

  DoSimpan(){
    this.viewCtrl.dismiss(this.mhs);
  }

}
