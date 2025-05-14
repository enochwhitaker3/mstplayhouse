import { Component, inject, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { Play } from '../../../interfaces/play';
import { PlaysService } from '../../../services/plays/plays.service';

@Component({
  selector: 'app-sectiontwo',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './sectiontwo.component.html',
  styleUrl: './sectiontwo.component.scss',
})
export class SectiontwoComponent {
  playService: PlaysService = inject(PlaysService);
  plays: Play[] = [];

  constructor() {
    this.playService.getAllPlays().then((plays: Play[]) => {
      this.plays = plays;
    });
  }
}
