import { HOBI } from './../../../app/app.config';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AplikasihobiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aplikasihobi',
  templateUrl: 'aplikasihobi.html',
})
export class AplikasihobiPage {
  hobis : any = HOBI;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AplikasihobiPage');
  }

  Doaddhobi(){
    let doShowadd = this.alertCtrl.create({
      title: 'Tambah Hobi',
      subTitle: 'Hobi akan masuk dalam array',
      inputs: [{
        name: 'id',
        type: 'number',
        placeholder: 'Masukkan ID'
      },
      {
        name: 'nama',
        type: 'text',
        placeholder: 'Masukkan Nama hobi'
      },
      {
        name: 'kategori',
        type: 'text',
        placeholder: 'Masukkan Kategori'
      },
      {
        name: 'umur',
        type: 'number',
        placeholder: 'Umur'
      }
    ],

    buttons: [
      {
        text: 'Simpan',
        handler: (data)=>{
          this.hobis.push(data);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    });

    doShowadd.present();
  }

}
