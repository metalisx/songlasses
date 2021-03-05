import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'sg-app',
  templateUrl: './sg-app.component.html',
  styleUrls: ['./sg-app.component.scss']
})
export class SgAppComponent implements OnInit {
  
  @ContentChild('header')
  headerTemplate!: TemplateRef<any>;

  @ContentChild('content')
  contentTemplate!: TemplateRef<any>;

  @ContentChild('footer')
  footerTemplate!: TemplateRef<any>;

  @ContentChild('sidebar')
  sidebarTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
