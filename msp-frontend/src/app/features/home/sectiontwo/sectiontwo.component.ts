import { Component, inject, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { Play } from '../../../interfaces/play';
import { PlaysService } from '../../../services/plays/plays.service';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sectiontwo',
  imports: [CommonModule, ButtonComponent, LoaderComponent],
  templateUrl: './sectiontwo.component.html',
  styleUrl: './sectiontwo.component.scss',
})
export class SectiontwoComponent {
  playService: PlaysService = inject(PlaysService);
  plays: Play[] = [];
  loading = true;
  error: string | null = null;
  url = `${environment.apiUrl}plays`;

  async ngOnInit() {

    const response = await fetch(`${this.url}`, { method: 'GET', headers: { "Content-Type": "application/json" } });
    const result = await response.json();
    this.plays = result.value;
    this.loading = false;
    // fetch(`${this.url}`, { credentials: 'include' })
    //   .then(response => response.json())
    //   .then( data => {
    //     console.log('Fetched plays:', data);
    //     this.plays = data.value;
    //     this.loading = false;
    //   })
    //   .catch(err => {
    //     console.error('Error fetching plays:', err);
    //     this.loading = false;
    //     this.error = `AAAHHHHH!!! ${err} + ${err.message} + ${this.url}`;
    //   });
  }
}
