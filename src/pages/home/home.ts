import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { ListionicPage } from './../listionic/listionic';
import { InputpagePage } from '../inputpage/inputpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  msg: any;
  constructor(public navCtrl: NavController) {
    this.msg = "hello World";
  }

  GotoList(){
    this.navCtrl.push(ListionicPage);
  }

  Gotoinputpage(){
    this.navCtrl.push(InputpagePage);
  }

}
