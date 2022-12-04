import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixologyComponent } from './mixology.component';

describe('MixologyComponent', () => {
  let component: MixologyComponent;
  let fixture: ComponentFixture<MixologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MixologyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MixologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
