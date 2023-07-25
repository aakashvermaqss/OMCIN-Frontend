import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanydialogComponent } from './companydialog.component';

describe('CompanydialogComponent', () => {
  let component: CompanydialogComponent;
  let fixture: ComponentFixture<CompanydialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanydialogComponent]
    });
    fixture = TestBed.createComponent(CompanydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
