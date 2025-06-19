import { Component, inject, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { Play } from '../../../interfaces/play';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-sectiontwo',
  imports: [CommonModule, ButtonComponent, LoaderComponent],
  templateUrl: './sectiontwo.component.html',
  styleUrl: './sectiontwo.component.scss',
})
export class SectiontwoComponent {
  plays: Play[] = [];
  loading = true;
  error: string | null = null;
  baseUrl = environment.apiUrl;

  ngOnInit() {
    fetch(`${this.baseUrl}/GetPlays`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      this.plays = data.value;
      this.loading = false;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      this.loading = false;
      this.error = `AAAHHHHH!!! ${error} + ${error.message}`;
    });
  }
} 
