import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DiamondComponent } from '../../diamond/diamond.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navlink',
  imports: [DiamondComponent, CommonModule, RouterModule],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.scss',
})
export class NavlinkComponent {
  @Output() clickedEvent = new EventEmitter<void>();
  @Input() title: string = '';
  @Input() path: string = '';
  isHovered = false;

  constructor(public router: Router) {}

  get isActive(): boolean {
    return this.router.url.includes(this.path);
  }

  toggleMenu() {
    this.clickedEvent.emit();
  }
}
