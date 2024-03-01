import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  selectedFiles?: FileList;
  api = { fileupload: 'http://localhost:3000/file-upload/' };

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    return this.http.post(this.api.fileupload, formData, {
      responseType: 'text',
    });
  }
}
