import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboarComponent } from './dasboar.component';

describe('DasboarComponent', () => {
  let component: DasboarComponent;
  let fixture: ComponentFixture<DasboarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
