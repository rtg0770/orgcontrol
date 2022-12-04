import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritDetailPresentationComponent } from './spirit-detail-presentation.component';

describe('SpiritDetailPresentationComponent', () => {
  let component: SpiritDetailPresentationComponent;
  let fixture: ComponentFixture<SpiritDetailPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiritDetailPresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritDetailPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
