import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';

/**
 * Generated class for the OptbackgroundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-optbackground',
  templateUrl: 'optbackground.html',
})
export class OptbackgroundPage {
  backgrounds = ["None", "Danger", "Primary", "Secondary", "Light"];
  background = 0;
  page: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = this.navParams.data.page;
    this.background = this.navParams.data.background;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptbackgroundPage');
  }

  doChangeBg(){
    this.page.doSetbg(this.background);
  }

}
