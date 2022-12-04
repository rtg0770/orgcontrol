import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgaveComponent } from './agave.component';

describe('AgaveComponent', () => {
  let component: AgaveComponent;
  let fixture: ComponentFixture<AgaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgaveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
