import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgModelPage } from './ng-model';

@NgModule({
  declarations: [
    NgModelPage,
  ],
  imports: [
    IonicPageModule.forChild(NgModelPage),
  ],
})
export class NgModelPageModule {}
