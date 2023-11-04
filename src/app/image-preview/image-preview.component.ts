import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css'],
})
export class ImagePreviewComponent {
  @Input() url: string = '';
  previewWidth = 64;

  showImage() {}
}
