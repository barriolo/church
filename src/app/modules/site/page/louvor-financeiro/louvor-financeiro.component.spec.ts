import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouvorFinanceiroComponent } from './louvor-financeiro.component';

describe('LouvorFinanceiroComponent', () => {
  let component: LouvorFinanceiroComponent;
  let fixture: ComponentFixture<LouvorFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LouvorFinanceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LouvorFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
