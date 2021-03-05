import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgAppComponent } from './sg-app.component';

describe('SgAppComponent', () => {
  let component: SgAppComponent;
  let fixture: ComponentFixture<SgAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
