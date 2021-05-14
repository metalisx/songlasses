import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SgSidebarHamburgerComponent } from '../sg-sidebar-hamburger/sg-sidebar-hamburger.component';

import { SgAppHeaderComponent } from './sg-app-header.component';

describe('SgAppHeaderComponent', () => {
  let component: SgAppHeaderComponent;
  let fixture: ComponentFixture<SgAppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgAppHeaderComponent, SgSidebarHamburgerComponent ]
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
