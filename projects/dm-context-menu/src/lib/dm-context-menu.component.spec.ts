import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmContextMenuComponent } from './dm-context-menu.component';

describe('DmContextMenuComponent', () => {
  let component: DmContextMenuComponent;
  let fixture: ComponentFixture<DmContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DmContextMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
