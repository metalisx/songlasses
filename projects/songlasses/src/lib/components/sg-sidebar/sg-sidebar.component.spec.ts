import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SgSidebarHamburgerComponent } from '../sg-sidebar-hamburger/sg-sidebar-hamburger.component';

import { SgSidebarComponent } from './sg-sidebar.component';

describe('SgSidebarComponent', () => {
  let component: SgSidebarComponent;
  let fixture: ComponentFixture<SgSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgSidebarComponent, SgSidebarHamburgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
