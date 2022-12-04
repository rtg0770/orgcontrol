import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAccountsBoxComponent } from './search-accounts-box.component';

describe('SearchAccountsBoxComponent', () => {
  let component: SearchAccountsBoxComponent;
  let fixture: ComponentFixture<SearchAccountsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchAccountsBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchAccountsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
