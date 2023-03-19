import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultoOnlineComponent } from './culto-online.component';

describe('CultoOnlineComponent', () => {
  let component: CultoOnlineComponent;
  let fixture: ComponentFixture<CultoOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultoOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultoOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
