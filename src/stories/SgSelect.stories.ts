// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SgSelectComponent } from 'projects/songlasses/src/lib/components/sg-select/sg-select.component';
import { SgSelectModule } from 'projects/songlasses/src/lib/components/sg-select/sg-select.module';
import { MOVIESTARS } from './assets/mocks/mock-movie-stars';
import { SUPERHEROES } from './assets/mocks/mock-superheroes';

export default {
  title: 'Songlasses/SgSelect',
  component: SgSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SgSelectModule]
    })
  ],
} as Meta;

const Template: Story<SgSelectComponent> = (args: SgSelectComponent) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {
  componentConfig: {
    items: MOVIESTARS
  }
} 

export const AllOptions = Template.bind({});
AllOptions.args = {
  componentConfig: {
    itemMatchStrategy: 'startsWith',
    required: true,
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: SUPERHEROES
  }
} 