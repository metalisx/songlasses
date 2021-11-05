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
  ],
  parameters: {
    abc: 'abc'
  }
} as Meta;

const Template: Story<SgSelectComponent> = (args: SgSelectComponent) => ({
  props: args,
  template: `<div style='min-height: 200px'><sg-select [componentConfig]="componentConfig"></sg-select></div>`
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
    items: [],
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

const customStylingCss: String = `
.selectStyled.sg-select {
  width: 50%;
}
.selectStyled.sg-select sg-select-input {
  border: 1px solid #b07070;
}
.selectStyled.sg-select .sg-select-dropwdown {
  border: 1px solid #a06060;
  background-color: #a06060;
}
.selectStyled.sg-select .sg-select-dropdown-items {
  background-color: #a06060;
}
.selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-item {
  color: #fff;
}
.selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-item:hover {
  background-color: #904040;
  color: #fff;
}
.selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-selected-item-active {
  background-color: #702020;
  color: #fff;
}
.selectStyled.sg-select .sg-select-dropdown-paging {
  background-color: #a06060;
}
`
const TemplateCustomStyling: Story<SgSelectComponent> = (args: SgSelectComponent) => ({
  props: {...args, 'customStylingCss': customStylingCss},
  template: `
  <div style="min-height: 200px">
    <sg-select [componentConfig]="componentConfig"></sg-select>
    <div class="code-container">
      <div class="code-panel">
        <h6>Custom styles</h6>
        <textarea class="code" readonly>{{customStylingCss}}</textarea> 
      </div>  
    </div>
  </div>`
});
export const CustomStyling = TemplateCustomStyling.bind({});
CustomStyling.args = {
  componentConfig: {
    name: 'customStyling',
    items: MOVIESTARS,
    className: 'selectStyled'
  }
}
