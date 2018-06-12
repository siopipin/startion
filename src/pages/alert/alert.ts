import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  hasil: any;
  mahasiswa: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  //basic alert
  DoShowAlert(){
    let pemberitahuan = this.alertCtrl.create({
        title: "Pemberitahuan",
        message: "Simpan perubahan",
        buttons: ['Simpan']
    });
    pemberitahuan.present();
  }

  //confirm alert
  DoConfirmAlert(){
    let pemberitahuan = this.alertCtrl.create({
      title: "Peringatan",
      message: "Ingin keluar aplikasi",
      buttons: [{
        text: "Ya, saya yakin",
        handler: ()=>{
          this.hasil = "Terimakasih telah menggunakan aplikasi ini !"
        }
      },
      {
        text : "Tidak, saya tidak yakin!",
        role: "cancel",
        handler: ()=>{
          this.hasil = "Anda memilih tidak yakin!";
        }
      }]
    });
    pemberitahuan.present();
  }

  //input alert
  DoInputAlert(){
    let pemberitahuan = this.alertCtrl.create({
      title: "Tambah data mahasiswa",
      subTitle: "Ke dalam array mahasiswa",
      inputs: [{
        name: "nim",
        placeholder: "Masukkan Nim",
        type: "number"
      },
      {
        name: "nama",
        placeholder: "Masukkan Nama",
        type: "text"
      }],
      buttons : [{
        text: "Simpan",
        handler: (data)=>{
          this.mahasiswa.push({nim: data.nim, nama: data.nama})
        }
      },
      {
        text: "Batal",
        role: "cencel",
        handler: ()=>{
          console.log('batal');
        }
        }]
      });

      pemberitahuan.present();
  }

}
