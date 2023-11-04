import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [AppComponent, ImageUploadComponent, ImagePreviewComponent, ImageComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
