import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenumbersListComponent } from './phonenumbers-list.component';

describe('PhonenumbersListComponent', () => {
  let component: PhonenumbersListComponent;
  let fixture: ComponentFixture<PhonenumbersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonenumbersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonenumbersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
