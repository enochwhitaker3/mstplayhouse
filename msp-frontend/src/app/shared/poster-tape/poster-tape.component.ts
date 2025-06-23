import { Component, Input } from '@angular/core';
import { Play } from '../../interfaces/play';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poster-tape',
  imports: [CommonModule],
  templateUrl: './poster-tape.component.html',
  styleUrl: './poster-tape.component.scss'
})
export class PosterTapeComponent {
  @Input() play!: Play;
}
