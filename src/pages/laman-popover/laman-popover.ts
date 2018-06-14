import { OptbackgroundPage } from './../optbackground/optbackground';
import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController
} from 'ionic-angular';

//ini komponent untuk mypopover
@Component({
  template: `<ion-item> Bagikan </ion-item> <ion-item> Laporkan </ion-item> <ion-item> Nyalakan Notifikasi </ion-item>`
})
export class MyPopover {
  constructor() {}
}

@IonicPage()
@Component({
  selector: 'page-laman-popover',
  templateUrl: 'laman-popover.html',
})


export class LamanPopoverPage {
  pilihan = 'materi';
  background : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popoverCtrl: PopoverController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LamanPopoverPage');
  }

  doShowpopover(event) {
    let showpopover = this.popoverCtrl.create(MyPopover);
    showpopover.present({
      ev: event
    });
  }

  doShowchangebg(event){
    let showchangebg = this.popoverCtrl.create(OptbackgroundPage, {page : this, background: this.background});

    // Di method create diatas, terdapat 2 data yang di-pass ke view OptBackgroundPage yaitu this, dan background. this disini nantinya akan digunakan untuk mengakses function pada class ApiLibraryPage dari class OptBackgroundPage.

    showchangebg.present({
      ev : event
    });
  }

  doSetbg(value){
    this.background = value;
  }

}
