import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImageComponent } from './image/image.component';
import { UploadService } from './shared/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    ImagePreviewComponent,
    ImageComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [UploadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
