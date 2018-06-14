import {
  HOBI
} from './../../../../app/app.config';
import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';

/**
 * Generated class for the EdithobiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edithobi',
  templateUrl: 'edithobi.html',
})
export class EdithobiPage {

  hobis: any = HOBI;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  )
  {
    this.hobis = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdithobiPage');
  }

  doCloseEdit(){
    this.viewCtrl.dismiss();
  }

  doSimpanEdit(){
    this.viewCtrl.dismiss(
      this.hobis = this.hobis
    );
  }

}
