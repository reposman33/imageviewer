import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  selectedFiles?: FileList;
  api = {
    fileupload: 'http://localhost:3000/file-upload',
    fileList: 'http://localhost:3000/filelist',
  };
  filelistSubject$ = new Subject<String[]>();
  filelist$ = this.filelistSubject$.asObservable();

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    return this.http.post(this.api.fileupload, formData, {
      responseType: 'text',
    });
  }

  getFiles() {
    this.http.get(this.api.fileList).subscribe((res) => {
      this.filelistSubject$.next(res as string[]);
    });
  }
}
