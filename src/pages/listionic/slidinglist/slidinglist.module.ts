import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidinglistPage } from './slidinglist';

@NgModule({
  declarations: [
    SlidinglistPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidinglistPage),
  ],
})
export class SlidinglistPageModule {}
