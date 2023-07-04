import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwofactorauthenticationComponent } from './twofactorauthentication.component';

describe('TwofactorauthenticationComponent', () => {
  let component: TwofactorauthenticationComponent;
  let fixture: ComponentFixture<TwofactorauthenticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwofactorauthenticationComponent]
    });
    fixture = TestBed.createComponent(TwofactorauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
