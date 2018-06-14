import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the ActionsheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html',
})
export class ActionsheetPage {
  pilihan = "materi";
  mahasiswa: any = "";
  kontak : any = [
    {nama: 'Sio Jurnalis Pipin', telp: '+62 80022 2993', isEdit : false},
    {nama: 'Sio Herman Wijaya kusuma', telp: '+62 80022 2991', isEdit : false}
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private actsheetCtrl : ActionSheetController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionsheetPage');
  }

  DoShowactionsheet(){
    let doshowaction = this.actsheetCtrl.create({
      title: "Lakukan aksi",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        handler: ()=>{
          this.mahasiswa = "Delete";
        }
      },
      {
        text: 'Edit',
        handler: ()=>{
          this.mahasiswa = "Edit";
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler : ()=>{
          this.mahasiswa = "Cancel"
        }
      }

    ]
    });

    doshowaction.present();
  }

  doShowEdit(index){
    let doshowedit = this.actsheetCtrl.create({
      title: 'Kontak saya',
      subTitle: 'Kumpulan kontak pribadi',
      buttons : [{
        text: 'Delete',
        role: 'destructive',
        handler: ()=>{
          this.kontak.splice(index, 1);
        }
      },
      {
        text: 'Call',
        handler: ()=>{
          console.log('Call some phone');
        }
      },
      {
        text: 'Edit',
        handler: ()=>{
          this.kontak[index].isEdit = true;
        }
      },
      {
        text: 'cancel',
        role: 'cancel',
        handler: ()=>{
          console.log('Cancel');
        }
      }
    ]
    });

    doshowedit.present();
  }



}
