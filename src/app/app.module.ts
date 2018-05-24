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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    ThumbnaillistPage

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
    ThumbnaillistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
