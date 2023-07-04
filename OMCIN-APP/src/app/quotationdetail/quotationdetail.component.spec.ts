import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationdetailComponent } from './quotationdetail.component';

describe('QuotationdetailComponent', () => {
  let component: QuotationdetailComponent;
  let fixture: ComponentFixture<QuotationdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotationdetailComponent]
    });
    fixture = TestBed.createComponent(QuotationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
