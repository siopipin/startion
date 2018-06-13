import { Component} from '@angular/core';
import { HomePage } from '../home/home';
import { InputnilaiPage } from '../inputnilai/inputnilai';

import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modalcontroller',
  templateUrl: 'modalcontroller.html',
})
export class ModalcontrollerPage {

  pilihan = "materi";
  mahasiswa : any = [
    {nama: "", nim: "", nilai: ""}
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private ModalCtrl: ModalController
  ) {
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalcontrollerPage');
  }

  DoShowmodal() {
    let tampil = this.ModalCtrl.create(HomePage);

    tampil.present();
  }

  //Fungsi untuk menambah nilai
  DoAddnilaimahasiswa(){
    let dataawal = {nama: 'sio', nim: '151', nilai: '90' };
    let modal = this.ModalCtrl.create(InputnilaiPage, dataawal);
    modal.onDidDismiss((data)=>{
      if(data){
        this.mahasiswa.push(data);
      }
    });
    modal.present();
  }

}
