import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  previews = [
    { url: '../../assets/images/defaultPreview.png' },
    { url: '../../assets/images/defaultPreview.png' },
    { url: '../../assets/images/defaultPreview.png' },
    { url: '../../assets/images/defaultPreview.png' },
    { url: '../../assets/images/defaultPreview.png' },
    { url: '../../assets/images/defaultPreview.png' },
  ];
}
