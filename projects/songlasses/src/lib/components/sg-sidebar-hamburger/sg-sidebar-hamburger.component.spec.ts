import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { SgSidebar } from '../../models/sg-sidebar/sg-sidebar.model';
import { SgSidebarService } from '../../services/sg-sidebar/sg-sidebar.service';

import { SgSidebarHamburgerComponent } from './sg-sidebar-hamburger.component';

describe('SgSidebarHamburgerComponent', () => {
  
  let injector: TestBed;
  let component: SgSidebarHamburgerComponent;
  let fixture: ComponentFixture<SgSidebarHamburgerComponent>;
  let sidebarService: SgSidebarService;

  let sidebarServiceMock: jasmine.SpyObj<SgSidebarService>;
  let getSidebarObservableSpy: jasmine.Spy;

  let sidbarServiceSubject: Subject<SgSidebar> = new Subject<SgSidebar>();

  beforeEach(async () => {
    sidebarServiceMock = jasmine.createSpyObj('SidebarService', ['getSidebar', 'getSidebarObservable', 
      'show', 'hide', 'integratedShow', 'integratedHide', 'refresh']);
    getSidebarObservableSpy = sidebarServiceMock.getSidebarObservable.and.returnValue(sidbarServiceSubject.asObservable());
  
    await TestBed.configureTestingModule({
      declarations: [ SgSidebarHamburgerComponent ]
      ,providers: [{ provide: SgSidebarService, useValue: sidebarServiceMock }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(SgSidebarHamburgerComponent);
    component = fixture.componentInstance;
    sidebarService = TestBed.inject(SgSidebarService);
    let sidebar: SgSidebar = {
      show: false,
      integrated: false
    }
    component.sidebar = sidebar;
    fixture.detectChanges();
    expect(sidebarService.getSidebarObservable).toHaveBeenCalled();
    expect(sidebarService.refresh).toHaveBeenCalled();
    expect(fixture.debugElement.queryAll(By.css('.sg-sidebar-hamburger-button')).length).toBe(1);
    expect(fixture.debugElement.query(By.css('.sg-sidebar-hamburger-button'))).toBeDefined();
    expect(fixture.debugElement.query(By.css('.sg-sidebar-hamburger-button.sg-sidebar-hamburger-button-hide'))).toBeNull();
    expect(fixture.debugElement.query(By.css('.sg-sidebar-integrated-hamburger-button'))).toBeNull();
    expect(fixture.debugElement.query(By.css('.sg-sidebar-integrated-hamburger-button.sg-sidebar-integrated-hamburger-button-show'))).toBeNull();
  });

  it('#toggleSidebar() should show sidebar', () => {
    let sidebar: SgSidebar = {
      show: false,
      integrated: false
    }
    component.sidebar = sidebar;
    component.toggleSidebar();
    expect(sidebarService.show).toHaveBeenCalled();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.sg-sidebar-hamburger-button')).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.css('.sg-sidebar-integrated-hamburger-button')).length).toBe(0);
    expect(fixture.debugElement.query(By.css('.sg-sidebar-hamburger-button'))).toBeDefined();
    expect(fixture.debugElement.query(By.css('.sg-sidebar-hamburger-button.sg-sidebar-hamburger-button-hide'))).toBeNull();
    expect(fixture.debugElement.query(By.css('.sg-sidebar-integrated-hamburger-button'))).toBeNull();
    expect(fixture.debugElement.query(By.css('.sg-sidebar-integrated-hamburger-button.sg-sidebar-integrated-hamburger-button-show'))).toBeNull();
  });

  it('#toggleSidebar() should hide sidebar', () => {
    let sidebar: SgSidebar = {
      show: true,
      integrated: false
    }
    component.sidebar = sidebar;
    component.toggleSidebar();
    expect(sidebarService.hide).toHaveBeenCalled();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.sg-sidebar-hamburger-button')).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.css('.sg-sidebar-integrated-hamburger-button')).length).toBe(0);
    expect(fixture.debugElement.query(By.css('.sg-sidebar-hamburger-button'))).toBeDefined();
    expect(fixture.debugElement.query(By.css('.sg-sidebar-hamburger-button.sg-sidebar-hamburger-button-hide'))).toBeNull();
    expect(fixture.debugElement.query(By.css('.sg-sidebar-integrated-hamburger-button'))).toBeNull();
    expect(fixture.debugElement.query(By.css('.sg-sidebar-integrated-hamburger-button.sg-sidebar-integrated-hamburger-button-show'))).toBeNull();
  });

});
