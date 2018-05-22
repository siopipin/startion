import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasiclistPage } from './basiclist';

@NgModule({
  declarations: [
    BasiclistPage,
  ],
  imports: [
    IonicPageModule.forChild(BasiclistPage),
  ],
})
export class BasiclistPageModule {}
