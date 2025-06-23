import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { VenmoButtonComponent } from '../../shared/venmo-button/venmo-button.component';

@Component({
  selector: 'app-get-tickets',
  imports: [CommonModule, VenmoButtonComponent, FooterComponent],
  templateUrl: './get-tickets.component.html',
  styleUrl: './get-tickets.component.scss'
})
export class GetTicketsComponent {

}
