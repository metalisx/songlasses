import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgAppFooterComponent } from './sg-app-footer.component';

describe('SgAppFooterComponent', () => {
  let component: SgAppFooterComponent;
  let fixture: ComponentFixture<SgAppFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgAppFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
