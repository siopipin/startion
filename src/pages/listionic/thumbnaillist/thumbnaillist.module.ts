import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThumbnaillistPage } from './thumbnaillist';

@NgModule({
  declarations: [
    ThumbnaillistPage,
  ],
  imports: [
    IonicPageModule.forChild(ThumbnaillistPage),
  ],
})
export class ThumbnaillistPageModule {}
