import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgAppHeaderComponent } from './sg-app-header.component';

describe('SgAppHeaderComponent', () => {
  let component: SgAppHeaderComponent;
  let fixture: ComponentFixture<SgAppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgAppHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
