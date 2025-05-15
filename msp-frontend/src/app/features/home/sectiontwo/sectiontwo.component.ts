import { Component, inject, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { Play } from '../../../interfaces/play';
import { PlaysService } from '../../../services/plays/plays.service';
import { LoaderComponent } from '../../../shared/loader/loader.component';

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

  async ngOnInit() {
    try {
      await this.playService.getAllPlays().subscribe((plays) => {
        this.plays = plays;
      });
    } catch (err) {
      console.error('Error fetching plays:', err);
    } finally {
      this.loading = false;
    }
  }

  // constructor() {
  //   this.playService.getAllPlays().then((plays: Play[]) => {
  //     this.plays = plays;
  //   });
  // }
}
