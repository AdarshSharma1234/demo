import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTailwindComponent } from './demo-tailwind.component';

describe('DemoTailwindComponent', () => {
  let component: DemoTailwindComponent;
  let fixture: ComponentFixture<DemoTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTailwindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
