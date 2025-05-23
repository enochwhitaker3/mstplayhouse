import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondComponent } from './diamond.component';

describe('DiamondComponent', () => {
  let component: DiamondComponent;
  let fixture: ComponentFixture<DiamondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiamondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
