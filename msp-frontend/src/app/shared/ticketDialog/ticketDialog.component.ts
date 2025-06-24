import { Component, Inject, Input } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Play } from '../../interfaces/play';

@Component({
  selector: 'app-ticketDialog-content',
  templateUrl: `./ticketDialog.component.html`,
  styleUrl: './ticketDialog.component.scss',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  standalone: true,
})
export class TicketDiaglogComponent {
  play: Play;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Play) {
    this.play = data;
   }
}