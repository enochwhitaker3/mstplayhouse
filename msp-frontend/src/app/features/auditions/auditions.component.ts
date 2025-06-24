import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { environment } from '../../../environments/environment';
import { Play } from '../../interfaces/play';
import { CommonModule } from '@angular/common';
import { LoaderDarkComponent } from '../../shared/loader-dark/loader-dark.component';
import { DownloadButtonComponent } from '../../shared/download-button/download-button.component';

@Component({
  selector: 'app-auditions',
  imports: [CommonModule, DownloadButtonComponent, LoaderDarkComponent, FooterComponent],
  templateUrl: './auditions.component.html',
  styleUrl: './auditions.component.scss'
})
export class AuditionsComponent {
  currentPlay!: Play;
  loading = true;
  baseUrl = environment.apiUrl;

  constructor() {}

  ngOnInit() {
    fetch(`${this.baseUrl}/GetPlays`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      this.currentPlay = data.value[0];
      this.loading = false;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      this.loading = false;
    });
  }
}
