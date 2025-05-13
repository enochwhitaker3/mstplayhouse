import { Component, inject } from '@angular/core';
import { Play } from '../../interfaces/play';
import { PlaysService } from '../../services/plays/plays.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  playService: PlaysService = inject(PlaysService);
  plays: Play[] = [];

  constructor() {
    this.playService.getAllPlays().then((plays: Play[]) => {
      this.plays = plays;
    });
  }
}
