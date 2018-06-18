import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  AlertController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-more-tugas",
  templateUrl: "more-tugas.html"
})
export class MoreTugasPage {
  tugas: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController
  ) {
    this.tugas = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MoreTugasPage");
  }

  doDismis() {
    let doalert = this.alertCtrl.create({
      title: "Simpan Perubahan ?",
      buttons: [
        {
          text: "Simpan",
          handler: () => {
            this.viewCtrl.dismiss(
              this.tugas = this.tugas
            );
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });

    doalert.present();
  }
}
