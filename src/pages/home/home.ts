import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { ListionicPage } from './../listionic/listionic';
import { InputpagePage } from '../inputpage/inputpage';
import { NgModelPage } from './../ng-model/ng-model';
import { FragmentPage } from './../fragment/fragment';

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

  Gotongmodelpage(){
    this.navCtrl.push(NgModelPage);
  }

  GotoFragementpage(){
    this.navCtrl.push(FragmentPage);
  }

}
