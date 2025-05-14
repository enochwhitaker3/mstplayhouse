import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = 'Click Me';
  @Input() route: string = '/';
  @Input() color: string = '#ece6d8';
  @Input() backgroundColor: string = '#191a18';

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }
}
