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

}
