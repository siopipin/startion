import { ExportvariabelPage } from './../pages/exportvariabel/exportvariabel';
import { DaftarmahasiswaPage } from './../pages/daftarmahasiswa/daftarmahasiswa';
import { ArrayObjectPage } from './../pages/array-object/array-object';
import { ArrayPage } from './../pages/array/array';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from './../pages/about/about';
import { SettingPage } from './../pages/setting/setting';
import { ListuiPage } from './../pages/listui/listui';
import { ListavatarPage } from './../pages/listavatar/listavatar';
import { ListionicPage } from './../pages/listionic/listionic';
import { BasiclistPage } from './../pages/listionic/basiclist/basiclist';
import { NolineslistPage } from './../pages/listionic/nolineslist/nolineslist';
import { InsetlistPage } from './../pages/listionic/insetlist/insetlist';
import { ListdevidersPage } from './../pages/listionic/listdeviders/listdeviders';
import { IconlistPage } from './../pages/listionic/iconlist/iconlist';
import { AvatarlistPage } from './../pages/listionic/avatarlist/avatarlist';
import { SlidinglistPage } from './../pages/listionic/slidinglist/slidinglist';
import { ThumbnaillistPage } from './../pages/listionic/thumbnaillist/thumbnaillist';
import { InputpagePage } from './../pages/inputpage/inputpage';
import { NgModelPage } from './../pages/ng-model/ng-model';
import { SmsPage } from './../pages/ng-model/sms/sms';
import { TodoPage } from './../pages/ng-model/todo/todo';
import { FragmentPage } from './../pages/fragment/fragment';
import { FragmentheaderPage } from './../pages/fragment/fragmentheader/fragmentheader';
import { LoginPage } from '../pages/login/login';
import { PassingdataPage } from '../pages/passingdata/passingdata';
import { DaftarmantanPage } from '../pages/daftarmantan/daftarmantan';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MoviepagePage } from '../pages/moviepage/moviepage';
import { MenumakananPage } from '../pages/menumakanan/menumakanan';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    SettingPage,
    ListuiPage,
    ListavatarPage,
    ListionicPage,
    BasiclistPage,
    NolineslistPage,
    InsetlistPage,
    ListdevidersPage,
    IconlistPage,
    AvatarlistPage,
    SlidinglistPage,
    ThumbnaillistPage,
    InputpagePage,
    NgModelPage,
    SmsPage,
    TodoPage,
    FragmentPage,
    FragmentheaderPage,
    LoginPage,
    PassingdataPage,
    DaftarmantanPage,
    ArrayPage,
    MoviepagePage,
    ArrayObjectPage,
    MenumakananPage,
    DaftarmahasiswaPage,
    ExportvariabelPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    SettingPage,
    ListuiPage,
    ListavatarPage,
    ListionicPage,
    BasiclistPage,
    NolineslistPage,
    InsetlistPage,
    ListdevidersPage,
    IconlistPage,
    AvatarlistPage,
    SlidinglistPage,
    ThumbnaillistPage,
    InputpagePage,
    NgModelPage,
    SmsPage,
    TodoPage,
    FragmentPage,
    FragmentheaderPage,
    LoginPage,
    PassingdataPage,
    DaftarmantanPage,
    ArrayPage,
    MoviepagePage,
    ArrayObjectPage,
    MenumakananPage,
    DaftarmahasiswaPage,
    ExportvariabelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
