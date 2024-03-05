import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  fileName: string = '';
  httpPostResponse = '';

  constructor(private apiService: ApiService) {}

  handleUpload(e: Event) {
    const element = e.target as HTMLInputElement;
    const selectedFile = element.files![0];
    this.fileName = selectedFile.name;
    if (this.fileName) {
      this.apiService.uploadFile(selectedFile).subscribe((res) => {
        this.httpPostResponse = res;
        this.apiService.getFiles();
      });
    }
  }
}
