import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the LamanhttpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lamanhttp',
  templateUrl: 'lamanhttp.html',
})
export class LamanhttpPage {
  apps : any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient
  )
  {
    this.http.get('assets/app.json').subscribe((res : any)=>{
      this.apps = res; //tampung data respon ke variabel apps
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LamanhttpPage');
  }

}
