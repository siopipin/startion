import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DateTimePage } from './date-time';

@NgModule({
  declarations: [
    DateTimePage,
  ],
  imports: [
    IonicPageModule.forChild(DateTimePage),
  ],
})
export class DateTimePageModule {}
