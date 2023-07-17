import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchemicalComponent } from './editchemical.component';

describe('EditchemicalComponent', () => {
  let component: EditchemicalComponent;
  let fixture: ComponentFixture<EditchemicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditchemicalComponent]
    });
    fixture = TestBed.createComponent(EditchemicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
