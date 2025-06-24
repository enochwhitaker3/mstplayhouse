import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { TicketDiaglogComponent } from '../ticketDialog/ticketDialog.component';
import { MatButtonModule } from '@angular/material/button';
import { Play } from '../../interfaces/play';

@Component({
  selector: 'app-download-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatDialogModule],
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.scss',
})
export class DownloadButtonComponent {
  @Input() color: string = '#ece6d8';
  @Input() backgroundColor: string = '#191a18';

  downloadPDF() {
    let link = document.createElement('a');
    link.download = 'summer_camp_registration.pdf';
    link.href = 'assets/summer-camp-form.pdf';
    link.click();
  }
}
