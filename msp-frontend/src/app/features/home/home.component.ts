import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectiononeComponent } from './sectionone/sectionone.component';
import { SectiontwoComponent } from "./sectiontwo/sectiontwo.component";
import { SectionthreeComponent } from "./sectionthree/sectionthree.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SectiononeComponent, SectiontwoComponent, SectionthreeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
