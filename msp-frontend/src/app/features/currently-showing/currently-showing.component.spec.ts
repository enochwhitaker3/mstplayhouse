import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyShowingComponent } from './currently-showing.component';

describe('CurrentlyShowingComponent', () => {
  let component: CurrentlyShowingComponent;
  let fixture: ComponentFixture<CurrentlyShowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentlyShowingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlyShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
