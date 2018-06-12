import { TambahdatamhsPage } from './tambahdatamhs/tambahdatamhs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  hasil : boolean = false;
  daftarmahasiswa : any = MAHASISWA;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl : AlertController
  ) {
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
    let peringatan = this.alertCtrl.create({
      title: "Peringatan",
      message: "Anda yakin ingin menghapus data?",
      buttons: [{
        text: "Ya, hapus data!",
        handler : ()=>{
          this.daftarmahasiswa.splice(index, 1);
        }
      },
      {
        text: "Tidak, Khilaf",
        role: "cancel",
        handler : ()=>{
          console.log("tidak terhapus")
        }
      }
    ]
    });
    peringatan.present();
    
  }

}
