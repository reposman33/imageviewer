import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api.service';

type File = { url: string };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  previews: File[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.filelist$.subscribe(
      (fileNames) =>
        (this.previews = fileNames.map((fileName) => ({
          url: `http://localhost:3000/${fileName}`,
        })))
    );
    this.apiService.getFiles();
  }
}
