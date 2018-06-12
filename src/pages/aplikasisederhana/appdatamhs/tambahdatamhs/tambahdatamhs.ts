import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
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
  hasil: any;
  mahasiswas : any [] = MAHASISWA;
  mahasiswa : any = {
    nim: null, nama: null, jurusan: null, kelas: null, jadwal: null
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahdatamhsPage');
  }

  DoAddmhs(){
    let peringatan = this.alertCtrl.create({
      title: "Peringatan",
      message: "Apakah anda yakin ingin menambah mahasiswa",
      buttons: [{
        text: "Yakin, saya ingin menyimpan data",
        handler: ()=>{
          this.hasil = "Data telah tersimpan"
        }
      },
      {
        text: "Tidak, batalkan!!",
        role: "cancel",
        handler : ()=>{
          this.hasil = "Belum tersimpan"
        }
      }
    ]
    });
    peringatan.present();
    this.mahasiswas.push(this.mahasiswa);
    this.mahasiswa = "";
  }



}
