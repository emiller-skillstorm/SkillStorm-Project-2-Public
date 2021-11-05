import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhonenumberToDeviceComponent } from './add-phonenumber-to-device.component';

describe('AddPhonenumberToDeviceComponent', () => {
  let component: AddPhonenumberToDeviceComponent;
  let fixture: ComponentFixture<AddPhonenumberToDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhonenumberToDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhonenumberToDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
