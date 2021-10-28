import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCanvasComponent } from './login-canvas.component';

describe('LoginCanvasComponent', () => {
  let component: LoginCanvasComponent;
  let fixture: ComponentFixture<LoginCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
