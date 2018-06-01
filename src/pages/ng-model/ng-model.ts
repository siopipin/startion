import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmsPage } from './sms/sms';
import { TodoPage } from './todo/todo';


@IonicPage()
@Component({
  selector: 'page-ng-model',
  templateUrl: 'ng-model.html',
})
export class NgModelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgModelPage');
  }

  Gotosmspage(){
    this.navCtrl.push(SmsPage);
  }

  Gototodopage(){
    this.navCtrl.push(TodoPage);
  }

}
