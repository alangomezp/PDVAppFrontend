import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundbagComponent } from './fundbag.component';

describe('FundbagComponent', () => {
  let component: FundbagComponent;
  let fixture: ComponentFixture<FundbagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundbagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
