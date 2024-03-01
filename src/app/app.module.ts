import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImageComponent } from './image/image.component';
import { ApiService } from './shared/api.service';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    ImagePreviewComponent,
    ImageComponent,
  ],
  imports: [BrowserModule, FormsModule, MatGridListModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
