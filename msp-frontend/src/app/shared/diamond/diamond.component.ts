import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.scss'],
  imports: [CommonModule],
})
export class DiamondComponent {
  @Input() isHovered: boolean = false;
  @Input() isClicked: boolean = false;
  @Input() position: 'left' | 'right' = 'left';
}
