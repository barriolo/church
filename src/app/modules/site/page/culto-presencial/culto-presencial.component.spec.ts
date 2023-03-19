import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultoPresencialComponent } from './culto-presencial.component';

describe('CultoPresencialComponent', () => {
  let component: CultoPresencialComponent;
  let fixture: ComponentFixture<CultoPresencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultoPresencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultoPresencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
