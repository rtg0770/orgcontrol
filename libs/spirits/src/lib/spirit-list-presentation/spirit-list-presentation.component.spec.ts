import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritListPresentationComponent } from './spirit-list-presentation.component';

describe('SpiritListPresentationComponent', () => {
  let component: SpiritListPresentationComponent;
  let fixture: ComponentFixture<SpiritListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiritListPresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
