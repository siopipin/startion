import { TUGAS } from "./../../app/app.config";
import { Component } from "@angular/core";
import { MoreTugasPage } from "../more-tugas/more-tugas";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ModalController,
  ToastController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-apps-tugas-harian",
  templateUrl: "apps-tugas-harian.html"
})
export class AppsTugasHarianPage {
  pilihan = "tugas";
  isCheked = false;
  tugas: any = TUGAS;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtlr: AlertController,
    private modalCtrl: ModalController,
    private toasCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AppsTugasHarianPage");
  }

  doAddTask() {
    let doaddtask = this.alertCtlr.create({
      title: "Tambahkan Tugas",
      inputs: [
        {
          type: "number",
          name: "id",
          placeholder: "ID"
        },
        {
          placeholder: "Nama",
          name: "nama",
          type: "text"
        },
        {
          placeholder: "Deskripsi",
          name: "deskripsi",
          type: "text"
        },
        {
          placeholder: "Hari",
          name: "hari",
          type: "text"
        },
        {
          placeholder: "Prioritas",
          name: "prioritas",
          type: "text"
        }
      ],
      buttons: [
        {
          text: "Simpan",
          handler: data => {
            this.tugas.push(data);
            this.doToasAdd();
          }
        },
        {
          text: "cancel",
          role: "cancel"
        }
      ]
    });
    doaddtask.present();
  }

  doMoreTask(index) {
    let tugas = TUGAS[index];
    let domoretask = this.modalCtrl.create(MoreTugasPage, tugas);

    domoretask.present();
  }

  doToasAdd() {
    let dotoas = this.toasCtrl.create({
      duration: 2000,
      message: "Tugas Berhasil di Simpan",
      position: "bottom",
      dismissOnPageChange: true,
      showCloseButton: true,
      closeButtonText: "Tutup"
    });

    dotoas.present();
  }

  doDeleteTask(index) {
    let doalertdelete = this.alertCtlr.create({
      title: "Hapus Data ?",
      buttons: [
        {
          text: "Hapus",
          handler: () => {
            this.tugas.splice(index);
          }
        },
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    });
    doalertdelete.present();
  }
}
