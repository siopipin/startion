import {
  HOBI
} from './../../../app/app.config';
import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ActionSheetController,
  ModalController,
  ToastController
} from 'ionic-angular';
import { EdithobiPage } from './edithobi/edithobi';

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
  hobis: any = HOBI;
  hasilfavorit : any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private actionCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private toasCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AplikasihobiPage');
  }

  Doaddhobi() {
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

      buttons: [{
          text: 'Simpan',
          handler: (data) => {
            this.hobis.push(data);
            this.doShowtoasberhasil();
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

  doShowtoasberhasil(){
    let doshowtoasberhasil = this.toasCtrl.create({
      message: 'Data berhasil di simpan',
      position: 'bottom',
      duration: 3000,
      dismissOnPageChange: true,
      showCloseButton: true,
      closeButtonText: 'Tutup'
    })

    doshowtoasberhasil.present();
  }

  doAlertdelete(index) {
    let doalert = this.alertCtrl.create({
      title: 'Peringatan',
      subTitle: 'Hapus data',
      buttons: [{
          text: 'Ya, saya yakin',
          handler: () => {
            this.hobis.splice(index, 1)
          }
        },
        {
          text: 'Tidak, saya tidak yakin',
          role: 'cancel'
        }
      ]
    });
    doalert.present();
  }

  doActionsheet(index){
    let doactionsheet = this.actionCtrl.create({
      title: 'Lakukan',
      subTitle: 'Melakukan Aksi',
      buttons: [{
        text: 'Delete',
        handler: ()=>{
          this.doAlertdelete(index);
        }
      },
      {
        text: 'Edit',
        handler: ()=>{
          this.doEdithobi(index);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    })

    doactionsheet.present();
  }

  doEdithobi(index){
    let dataawal = HOBI[index];
    let edit = this.modalCtrl.create(EdithobiPage, dataawal);;

    edit.onDidDismiss((data)=>{
      if(data){
        console.log('data', data);
      }
    });
    edit.present();
  };

  doShowAlertfavorit(){
    let hoby = HOBI;
    let doshowfavorit = this.alertCtrl.create({
      title: 'Daftar Hobi'
    });

    for(let item of hoby){
      doshowfavorit.addInput({
        type: 'checkbox',
        label: item.nama,
        value: item.nama
      });
    }

    doshowfavorit.addButton({
      text: 'Tambahkan',
      handler: (data)=>{
        this.hasilfavorit = data;
      }
    });

    doshowfavorit.addButton({
      text: 'Cancel',
      role: 'cancel'
    })

    doshowfavorit.present();
  }



}
