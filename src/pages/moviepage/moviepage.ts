import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviepage',
  templateUrl: 'moviepage.html',
})
export class MoviepagePage {

  segmentmovie = "film";
   movies : any[] = ["Spongebob","Doraemon","Naruto","Conan","Battle ground","Spiderman"]
  movie : string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movies.unshift("Avatar");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviepagePage');
  }

  DoAddmovie(){
    this.movies.push(this.movie);
    this.movie = "";
  }

  DoHapusmovie(index){
    this.movies.splice(index, 1);
  }


}
