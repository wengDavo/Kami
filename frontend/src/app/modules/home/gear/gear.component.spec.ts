import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearComponent } from './gear.component';

describe('GearComponent', () => {
  let component: GearComponent;
  let fixture: ComponentFixture<GearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
