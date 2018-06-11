import { DaftarmahasiswaPage } from './../daftarmahasiswa/daftarmahasiswa';
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

  pilihan = "makanan";

  // daftar_makanan : any = [{
  //   judul:"",
  //   tahun: ""
  // }]

  // makanan : any = {
  //   judul : null,
  //   tahun : null
  // }

  // menu: {
  //   id : number,
  //   nama : string
  // }[] = [
  //   {"id":0,"nama": "sio"},
  //   {"id":1,"nama": "jurnalis"},
  //   {"id":2,"nama": "pipin"}
  // ];

  //ini untuk makanan
  movies: any = [
    {title: "judul movie", desk : "deskripsi"},
    {title: "patrik", desk : "sponge"}
  ];

  movie : any = {
    title: "",
    desk: ""
  };

  //ini untuk movie
  films : any = [
    {judul : "Anonymous",tahun: 2017, kategori: "hacker"},
    {judul : "Fast and various",tahun: 2018, kategori: "action"}
  ];

  film : any = {
    judul : null, tahun: null, kategori: null
  };



  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MenumakananPage");
  }

  Doaddmovie(){
    this.movies.push(this.movie);
    this.movie = "";  
  }

  Gotodaftarmhs(movie){
    this.navCtrl.push(DaftarmahasiswaPage, {
      judul : this.movie.title, desk: this.movie.desk
    });
  }

  DoaddFilm(){
    this.films.push(this.film);
    this.film = "";
  }

  DoRemovefilm(index){
    this.films.splice(index, 1);
  }

  Gotofilm(film){
    this.navCtrl.push(DaftarmahasiswaPage, film);
  }
  
}
