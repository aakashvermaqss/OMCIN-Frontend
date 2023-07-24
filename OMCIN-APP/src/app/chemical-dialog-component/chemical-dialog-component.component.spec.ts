import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalDialogComponentComponent } from './chemical-dialog-component.component';

describe('ChemicalDialogComponentComponent', () => {
  let component: ChemicalDialogComponentComponent;
  let fixture: ComponentFixture<ChemicalDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChemicalDialogComponentComponent]
    });
    fixture = TestBed.createComponent(ChemicalDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
