import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritDetailComponent } from './spirit-detail.component';

describe('SpiritDetailComponent', () => {
  let component: SpiritDetailComponent;
  let fixture: ComponentFixture<SpiritDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiritDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
