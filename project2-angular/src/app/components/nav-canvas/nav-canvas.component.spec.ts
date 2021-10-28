import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCanvasComponent } from './nav-canvas.component';

describe('NavCanvasComponent', () => {
  let component: NavCanvasComponent;
  let fixture: ComponentFixture<NavCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
