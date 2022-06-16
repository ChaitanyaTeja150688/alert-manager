import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertManagerContentComponent } from './alert-manager-content.component';

describe('AlertManagerContentComponent', () => {
  let component: AlertManagerContentComponent;
  let fixture: ComponentFixture<AlertManagerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertManagerContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertManagerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
