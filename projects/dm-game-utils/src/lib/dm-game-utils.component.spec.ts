import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmGameUtilsComponent } from './dm-game-utils.component';

describe('DmGameUtilsComponent', () => {
  let component: DmGameUtilsComponent;
  let fixture: ComponentFixture<DmGameUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmGameUtilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmGameUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
