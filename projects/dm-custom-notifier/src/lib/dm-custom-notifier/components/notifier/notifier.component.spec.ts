import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMNotifierComponent } from './notifier.component';

describe('NotifierComponent', () => {
  let component: DMNotifierComponent;
  let fixture: ComponentFixture<DMNotifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DMNotifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DMNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
