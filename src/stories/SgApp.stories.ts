// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SgAppComponent } from 'projects/songlasses/src/lib/components/sg-app/sg-app.component';
import { SgAppModule } from 'projects/songlasses/src/lib/components/sg-app/sg-app.module';

export default {
  title: 'Songlasses/SgApp',
  component: SgAppComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterModule, FormsModule, SgAppModule]
    })
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const Template: Story<SgAppComponent> = (args: SgAppComponent) => ({
  template: `
<div style="height: 400px">

  <sg-app [app]="app">

    <ng-template #header>
      Header
    </ng-template>

    <ng-template #content>
      Content
    </ng-template>

    <ng-template #footer>
      Footer
    </ng-template>

    <ng-template #sidebar>
      Sidebar
    </ng-template>

  </sg-app>  
</div>
  `,
  props: args,
});

export const IntegratedSidebar = Template.bind({});
IntegratedSidebar.args = {
  app: {
    sidebarType: 'integrated-sidebar',
    showSidebar: false,
    showIntegratedSidebar: true
  }
} 

export const SlidingSidebar = Template.bind({});
SlidingSidebar.args = {
  app: {
    sidebarType: 'sliding-sidebar',
    showSidebar: false,
    showIntegratedSidebar: true
  }
} 

export const NoSidebar = Template.bind({});
NoSidebar.args = {
  app: {
    sidebarType: 'no-sidebar',
    showSidebar: false,
    showIntegratedSidebar: true
  }
} 
