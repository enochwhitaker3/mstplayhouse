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

  ngOnInit() {
    this.playService.getAllPlays().subscribe({
      next: (plays) => {
        this.plays = plays;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching plays:', err);
        this.loading = false;
        this.error = `Failed to load plays. Please try again later. ${err.message} + ${this.url}`;
      },
    });
  }
}
