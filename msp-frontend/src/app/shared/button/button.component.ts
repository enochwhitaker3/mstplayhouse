import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { TicketDiaglogComponent } from '../ticketDialog/ticketDialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatDialogModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = 'Click Me';
  @Input() route: string = '/';
  @Input() color: string = '#ece6d8';
  @Input() backgroundColor: string = '#191a18';
  @Input() isDialogButton: boolean = false;

  constructor(private dialog: MatDialog, private router: Router) {
    this.router = router;
  }

  navigate() {
    this.router.navigate([this.route]);
  }

  openDialog() {
    console.log('Button clicked, opening dialog:', this.isDialogButton);
    if(this.isDialogButton) {
      this.dialog.open(TicketDiaglogComponent);
    }
  }
}
