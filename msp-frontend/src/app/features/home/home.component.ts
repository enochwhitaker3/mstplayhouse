import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectiononeComponent } from './sectionone/sectionone.component';
import { SectiontwoComponent } from "./sectiontwo/sectiontwo.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SectiononeComponent, SectiontwoComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
