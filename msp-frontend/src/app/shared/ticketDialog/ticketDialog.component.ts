import { Component } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ticketDialog-content',
  templateUrl: `./ticketDialog.component.html`,
  styleUrl: './ticketDialog.component.scss',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  standalone: true,
})
export class TicketDiaglogComponent {}