import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMFakerProConfigComponent } from './dm-faker-pro-config.component';

describe('DMFakerProConfigComponent', () => {
  let component: DMFakerProConfigComponent;
  let fixture: ComponentFixture<DMFakerProConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DMFakerProConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DMFakerProConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
