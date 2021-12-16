import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuehacerComponent } from './quehacer.component';

describe('QuehacerComponent', () => {
  let component: QuehacerComponent;
  let fixture: ComponentFixture<QuehacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuehacerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuehacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
