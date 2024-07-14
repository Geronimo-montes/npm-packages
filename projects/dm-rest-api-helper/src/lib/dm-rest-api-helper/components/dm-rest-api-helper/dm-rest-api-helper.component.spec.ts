import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmRestApiHelperComponent } from './dm-rest-api-helper.component';

describe('DmRestApiHelperComponent', () => {
  let component: DmRestApiHelperComponent;
  let fixture: ComponentFixture<DmRestApiHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DmRestApiHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmRestApiHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
