import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviepagePage } from './moviepage';

@NgModule({
  declarations: [
    MoviepagePage,
  ],
  imports: [
    IonicPageModule.forChild(MoviepagePage),
  ],
})
export class MoviepagePageModule {}
