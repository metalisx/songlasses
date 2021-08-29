import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgSidebarMenuComponent } from './sg-sidebar-menu.component';

describe('SgSidebarMenuComponent', () => {
  let component: SgSidebarMenuComponent;
  let fixture: ComponentFixture<SgSidebarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgSidebarMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
