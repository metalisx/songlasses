// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SgSelectComponent } from 'projects/songlasses/src/lib/components/sg-select/sg-select.component';
import { SgSelectModule } from 'projects/songlasses/src/lib/components/sg-select/sg-select.module';
import { SgSelectComponentConfigService } from 'projects/songlasses/src/lib/services/sg-component-config/sg-select-component-config.service';
import { MOVIESTARS } from './assets/mocks/mock-movie-stars';
import { SUPERHEROES } from './assets/mocks/mock-superheroes';

export default {
  title: 'Songlasses/SgSelect',
  component: SgSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SgSelectModule],
      providers: [SgSelectComponentConfigService]
    })
  ]
} as Meta;

const Template: Story<SgSelectComponent> = (args: SgSelectComponent) => ({
  props: args
});

export const Defaults = Template.bind({});
Defaults.args = {
  componentConfig: {
    name: 'select',
    show: true,
    required: true,
    itemMatchStrategy: 'startsWith',
    itemValueField: 'value',
    itemDescriptionField: 'description',
    items: MOVIESTARS,
    className: ''
  }
} 

export const Minimal = Template.bind({});
Minimal.args = {
  componentConfig: {
    name: 'minimalSelect',
    items: MOVIESTARS
  }
} 

export const ShowIsFalse = Template.bind({});
ShowIsFalse.args = {
  componentConfig: {
    name: 'showIsFalseSelect',
    show: false,
    items: MOVIESTARS
  }
}

export const RequiredIsFalse = Template.bind({});
RequiredIsFalse.args = {
  componentConfig: {
    name: 'requiredIsFalseSelect',
    required: false,
    items: MOVIESTARS
  }
}

export const ItemMatchStrategyIsContains = Template.bind({});
ItemMatchStrategyIsContains.args = {
  componentConfig: {
    name: 'itemMatchStrategyIsContainsSelect',
    itemMatchStrategy: 'contains',
    items: MOVIESTARS,
  }
}

export const ItemMatchStrategyIsStartsWith = Template.bind({});
ItemMatchStrategyIsStartsWith.args = {
  componentConfig: {
    name: 'itemMatchStrategyIsStartsWithSelect',
    itemMatchStrategy: 'startsWith',
    items: MOVIESTARS,
  }
}

export const CustomItemFields = Template.bind({});
CustomItemFields.args = {
  componentConfig: {
    name: 'customItemFieldsSelect',
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: SUPERHEROES
  }
}

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  componentConfig: {
    name: 'customStyling',
    items: MOVIESTARS,
    className: 'selectStyled'
  }
}
