import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListionicPage } from './listionic';

@NgModule({
  declarations: [
    ListionicPage,
  ],
  imports: [
    IonicPageModule.forChild(ListionicPage),
  ],
})
export class ListionicPageModule {}
