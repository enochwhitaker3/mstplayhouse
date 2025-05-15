import { Component, Input } from '@angular/core';
import { MspLogoComponent } from '../msp-logo/msp-logo.component';
import { CommonModule } from '@angular/common';
import { NavlinkComponent } from './navlink/navlink.component';

@Component({
  selector: 'app-navbar',
  imports: [MspLogoComponent, CommonModule, NavlinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }
}
