import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMNotifierContainerComponent } from './notifier-container.component';

describe('NotifierContainerComponent', () => {
  let component: DMNotifierContainerComponent;
  let fixture: ComponentFixture<DMNotifierContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DMNotifierContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DMNotifierContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
