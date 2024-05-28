import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpbComponent } from './cpb.component';

describe('CpbComponent', () => {
  let component: CpbComponent;
  let fixture: ComponentFixture<CpbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpbComponent]
    });
    fixture = TestBed.createComponent(CpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
