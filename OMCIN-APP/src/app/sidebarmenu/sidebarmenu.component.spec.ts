import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmenuComponent } from './sidebarmenu.component';

describe('SidebarmenuComponent', () => {
  let component: SidebarmenuComponent;
  let fixture: ComponentFixture<SidebarmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarmenuComponent]
    });
    fixture = TestBed.createComponent(SidebarmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
