import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LamaninvinityscrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lamaninvinityscroll',
  templateUrl: 'lamaninvinityscroll.html',
})
export class LamaninvinityscrollPage {

  items = [1,2,3,4,5,6,7,8,9,10];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LamaninvinityscrollPage');
  }

  doRefresh(refresh){
    setTimeout(() => {
      this.items = [1,2,3,4,5,6,7,8,9,10];
      refresh.complete();
    }, 3400);
  }

  doInfinite(infinite){
    setTimeout(() => {
      for(let i = 1; i<= 10; i++){
        this.items.push(this.items[this.items.length - 1] + 1);
      }
      infinite.complete();
    }, 3000);
  }

}
