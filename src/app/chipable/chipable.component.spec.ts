import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipableComponent } from './chipable.component';

describe('ChipableComponent', () => {
  let component: ChipableComponent;
  let fixture: ComponentFixture<ChipableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
