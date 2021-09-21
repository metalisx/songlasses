// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SgSelectComponent } from 'projects/songlasses/src/lib/components/sg-select/sg-select.component';
import { SgSelectModule } from 'projects/songlasses/src/lib/components/sg-select/sg-select.module';
import { SgSelectComponentService } from 'projects/songlasses/src/lib/services/sg-component/sg-select-component.service';
import { SgRootComponentService } from 'projects/songlasses/src/lib/services/sg-component/sg-root-component.service';
import { SgGroupComponentService } from 'projects/songlasses/src/lib/services/sg-component/sg-group-component.service';

export default {
  title: 'Songlasses/SgSelect',
  component: SgSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterModule, SgSelectModule],
      providers: [SgSelectComponentService, SgRootComponentService, SgGroupComponentService]
    })
  ],
} as Meta;

const Template: Story<SgSelectComponent> = (args: SgSelectComponent) => ({
  props: args
});

export const Default = Template.bind({});
