import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationResultComponent } from './validation-result.component';

describe('ValidationResultComponent', () => {
  let component: ValidationResultComponent;
  let fixture: ComponentFixture<ValidationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
