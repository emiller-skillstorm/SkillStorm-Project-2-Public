import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenumberDetailsComponent } from './phonenumber-details.component';

describe('PhonenumberDetailsComponent', () => {
  let component: PhonenumberDetailsComponent;
  let fixture: ComponentFixture<PhonenumberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonenumberDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonenumberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
