import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-lamantoas',
  templateUrl: 'lamantoas.html',
})
export class LamantoasPage {
  pilihan = "materi";

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toasCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LamantoasPage');
  }

  doShowtoasctrl(){
    let doshowtoas = this.toasCtrl.create({
      message: 'Ini adalah contoh penggunaan Toas',
      duration: 5000,
      position: 'bottom'
    });
    doshowtoas.present();
  }

  doShowclosebutton(){
    let doshowclosebutton = this.toasCtrl.create({
      message: 'Dengan Close Button',
      duration : 4000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Tutup',
      dismissOnPageChange: true,
      cssClass: 'cssToast'
    });

    doshowclosebutton.present();

  }

}
