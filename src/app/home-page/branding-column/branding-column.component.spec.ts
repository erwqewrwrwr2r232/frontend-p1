import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingColumnComponent } from './branding-column.component';

describe('BrandingColumnComponent', () => {
  let component: BrandingColumnComponent;
  let fixture: ComponentFixture<BrandingColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandingColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandingColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
