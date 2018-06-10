import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the MenumakananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-menumakanan",
  templateUrl: "menumakanan.html"
})
export class MenumakananPage {
  
  daftar_makanan : any = [{
    judul:"",
    tahun: ""
  }]

  makanan : any = {
    judul : null,
    tahun : null
  }



  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MenumakananPage");
  }

  Doaddmakanan(){
    this.daftar_makanan.push(this.makanan);
    this.makanan = "";
  }
  
}
