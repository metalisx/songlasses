import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgSidebarComponent } from './sg-sidebar.component';

describe('SgSidebarComponent', () => {
  let component: SgSidebarComponent;
  let fixture: ComponentFixture<SgSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgSidebarComponent ]
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
