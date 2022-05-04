import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookCloneComponent } from './facebook-clone.component';

describe('FacebookCloneComponent', () => {
  let component: FacebookCloneComponent;
  let fixture: ComponentFixture<FacebookCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookCloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
