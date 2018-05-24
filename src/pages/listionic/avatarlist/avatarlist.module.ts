import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvatarlistPage } from './avatarlist';

@NgModule({
  declarations: [
    AvatarlistPage,
  ],
  imports: [
    IonicPageModule.forChild(AvatarlistPage),
  ],
})
export class AvatarlistPageModule {}
