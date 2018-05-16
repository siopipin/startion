import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListuiPage } from './listui';

@NgModule({
  declarations: [
    ListuiPage,
  ],
  imports: [
    IonicPageModule.forChild(ListuiPage),
  ],
})
export class ListuiPageModule {}
